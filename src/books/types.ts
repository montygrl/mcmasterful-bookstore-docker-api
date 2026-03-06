import type { BookID } from '../types';
export type { BookID };

export interface BookInfo {
  id: BookID;
  name: string;
  author: string;
  description: string;
  price: number;
  image: string;
  stock?: number;
}

export interface CreateBookBody {
  id?: string;
  name: string;
  price: number;
  description: string;
  author: string;
  image: string;
}