import { Route, Get, Post, Body, Path } from 'tsoa';
import { getOrdersStorage } from './memory-adapter';
import { isValidBookId } from './book-cache';
import type { BookID, OrderId, Order, FulfillmentItem } from './types';

export interface CreateOrderBody {
  books: BookID[];
}

export interface FulfillOrderBody {
  fulfillment: FulfillmentItem[];
}

function validateBookIds(bookIds: string[]): { valid: boolean; invalidIds: string[] } {
  const invalidIds = bookIds.filter(id => !isValidBookId(id));
  return { valid: invalidIds.length === 0, invalidIds };
}

/**
 * @summary Operations on orders
 */
@Route('orders')
export class OrderRoutes {

  @Get('/')
  public async listOrders(): Promise<Order[]> {
    const ordersStorage = getOrdersStorage();
    return ordersStorage.listOrders();
  }

  @Get('{orderId}')
  public async getOrder(@Path() orderId: OrderId): Promise<Order> {
    const ordersStorage = getOrdersStorage();
    const order = await ordersStorage.getOrder(orderId);
    if (!order) throw Object.assign(new Error('Order not found'), { status: 404 });
    return order;
  }

  @Post('/')
  public async createOrder(@Body() body: CreateOrderBody): Promise<{ orderId: OrderId }> {
    const validation = validateBookIds(body.books);
    if (!validation.valid) {
      throw Object.assign(
        new Error(`Invalid book IDs: ${validation.invalidIds.join(', ')}`),
        { status: 400 }
      );
    }
    const ordersStorage = getOrdersStorage();
    return ordersStorage.createOrder(body.books);
  }

  @Post('{orderId}/fulfill')
  public async fulfillOrder(
    @Path() orderId: OrderId,
    @Body() body: FulfillOrderBody
  ): Promise<object> {
    const ordersStorage = getOrdersStorage();
    const order = await ordersStorage.getOrder(orderId);
    if (!order) throw Object.assign(new Error('Order not found'), { status: 404 });
    if (order.fulfilled) throw Object.assign(new Error('Order already fulfilled'), { status: 400 });

    const fulfillmentCounts: Record<string, number> = {};
    for (const item of body.fulfillment) {
      fulfillmentCounts[item.book] = (fulfillmentCounts[item.book] ?? 0) + item.numberOfBooks;
    }

    for (const [bookId, required] of Object.entries(order.books)) {
      const provided = fulfillmentCounts[bookId] ?? 0;
      if (provided !== required) {
        throw Object.assign(
          new Error(`Fulfillment mismatch for book ${bookId}: required ${required}, provided ${provided}`),
          { status: 400 }
        );
      }
    }

    const { getWarehouseStorage } = await import('../warehouse/memory-adapter');
    const warehouse = getWarehouseStorage();
    for (const item of body.fulfillment) {
      await warehouse.removeBooksFromShelf(item.book, item.numberOfBooks, item.shelf);
    }

    await ordersStorage.fulfillOrder(orderId);
    return { success: true };
  }
}
