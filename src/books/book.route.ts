import { Route, Get, Post, Delete, Path, Body } from 'tsoa';
import { getDatabase } from '../db';
import { ObjectId } from 'mongodb';
import { getWarehouseStorage } from '../warehouse/memory-adapter';
import { lookupBookById } from './lookup';
import { publishEvent } from '../messaging';
import type { BookID, BookInfo, CreateBookBody } from './types';

/**
 * @summary Operations on books
 */
@Route('books')
export class BookRoutes {

  @Get('/')
  public async listBooks(): Promise<BookInfo[]> {
    const db = getDatabase();
    const warehouse = getWarehouseStorage();
    const documents = await db.collection('books').find({}).toArray();
    return Promise.all(documents.map(async (doc) => {
      const id = doc._id.toHexString();
      const stock = await warehouse.getTotalStock(id);
      return { id, name: doc.name, author: doc.author, description: doc.description, price: doc.price, image: doc.image, stock };
    }));
  }

  @Get('{book}')
  public async getBookInfo(@Path() book: BookID): Promise<BookInfo> {
    const db = getDatabase();
    const warehouse = getWarehouseStorage();
    const result = await lookupBookById(book, db, warehouse);
    if (!result) throw Object.assign(new Error('Book not found'), { status: 404 });
    return result;
  }

  @Post('/')
  public async createOrUpdateBook(@Body() body: CreateBookBody): Promise<{ id: string }> {
    const db = getDatabase();
    const collection = db.collection('books');
    let id: string;
    if (body.id) {
      await collection.replaceOne(
        { _id: { $eq: ObjectId.createFromHexString(body.id) } },
        { name: body.name, description: body.description, price: body.price, author: body.author, image: body.image }
      );
      id = body.id;
    } else {
      const result = await collection.insertOne({
        name: body.name, description: body.description,
        price: body.price, author: body.author, image: body.image
      });
      id = result.insertedId.toHexString();
    }
    // Publish BookAdded event
    await publishEvent('books', 'book.added', { id, name: body.name, author: body.author, price: body.price });
    return { id };
  }

  @Delete('{book}')
  public async deleteBook(@Path() book: BookID): Promise<object> {
    const db = getDatabase();
    const result = await db.collection('books').deleteOne(
      { _id: { $eq: ObjectId.createFromHexString(book) } }
    );
    if (result.deletedCount !== 1) throw Object.assign(new Error('Book not found'), { status: 404 });
    // Publish BookDeleted event
    await publishEvent('books', 'book.deleted', { id: book });
    return {};
  }
}
