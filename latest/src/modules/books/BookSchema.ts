import { Schema, Model, model } from 'mongoose';
import {BookType} from "./BookType";

export const bookSchema = new Schema<BookType, Model<BookType>>({
  id: String,
  title: String,
  description: String,
  authors: String,
  favorite: String,
  fileCover: String,
  fileName: String,
  fileBook: String
});


export const Book = model('Book', bookSchema);
