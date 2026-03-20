import { Route, Get, Post, Body, Path } from 'tsoa';
import { getWarehouseStorage } from './memory-adapter';
import { publishEvent } from '../messaging';
import type { BookID, ShelfId, ShelfStock } from './types';

export interface PlaceOnShelfBody {
  bookId: BookID;
  numberOfBooks: number;
  shelf: ShelfId;
}

/**
 * @summary Operations on the warehouse
 */
@Route('warehouse')
export class WarehouseRoutes {

  @Get('books/{bookId}/locations')
  public async findBookLocations(@Path() bookId: BookID): Promise<ShelfStock[]> {
    const warehouse = getWarehouseStorage();
    return warehouse.findBookOnShelf(bookId);
  }

  @Get('books/{bookId}/stock')
  public async getBookStock(@Path() bookId: BookID): Promise<{ bookId: BookID; stock: number }> {
    const warehouse = getWarehouseStorage();
    const stock = await warehouse.getTotalStock(bookId);
    return { bookId, stock };
  }

  @Post('shelves')
  public async placeBooksOnShelf(@Body() body: PlaceOnShelfBody): Promise<object> {
    const warehouse = getWarehouseStorage();
    await warehouse.placeBooksOnShelf(body.bookId, body.numberOfBooks, body.shelf);
    const stock = await warehouse.getTotalStock(body.bookId);
    // Publish BookStocked event
    await publishEvent('warehouse', 'book.stocked', { bookId: body.bookId, stock });
    return { success: true };
  }
}
