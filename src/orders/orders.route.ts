import { Route, Get, Post, Body, Path } from 'tsoa';
import { getOrdersStorage } from './memory-adapter';
import { getDatabase } from '../db';
import { ObjectId } from 'mongodb';
import type { BookID, OrderId, Order, FulfillmentItem } from './types';

export interface CreateOrderBody {
  books: BookID[];
}

export interface FulfillOrderBody {
  fulfillment: FulfillmentItem[];
}

async function validateBookIds(bookIds: string[]): Promise<{ valid: boolean; invalidIds: string[] }> {
  const db = getDatabase();
  const collection = db.collection('books');
  const invalidIds: string[] = [];
  for (const bookId of bookIds) {
    try {
      const objectId = ObjectId.createFromHexString(bookId);
      const book = await collection.findOne({ _id: objectId });
      if (!book) invalidIds.push(bookId);
    } catch {
      invalidIds.push(bookId);
    }
  }
  return { valid: invalidIds.length === 0, invalidIds };
}

/**
 * @summary Operations on orders
 */
@Route('orders')
export class OrderRoutes {

  /**
   * @summary List all orders
   */
  @Get('/')
  public async listOrders(): Promise<Order[]> {
    const ordersStorage = getOrdersStorage();
    return ordersStorage.listOrders();
  }

  /**
   * @summary Get a specific order
   */
  @Get('{orderId}')
  public async getOrder(@Path() orderId: OrderId): Promise<Order> {
    const ordersStorage = getOrdersStorage();
    const order = await ordersStorage.getOrder(orderId);
    if (!order) throw Object.assign(new Error('Order not found'), { status: 404 });
    return order;
  }

  /**
   * @summary Create a new order
   */
  @Post('/')
  public async createOrder(@Body() body: CreateOrderBody): Promise<{ orderId: OrderId }> {
    const validation = await validateBookIds(body.books);
    if (!validation.valid) {
      throw Object.assign(
        new Error(`Invalid book IDs: ${validation.invalidIds.join(', ')}`),
        { status: 400 }
      );
    }
    const ordersStorage = getOrdersStorage();
    return ordersStorage.createOrder(body.books);
  }

  /**
   * @summary Fulfill an order
   */
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