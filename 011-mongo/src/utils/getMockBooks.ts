import {BookType} from "../modules/books/BookType";

export const getMockBooks = (): BookType[] => [
  {
    id: "fa-345-678",
    title: "My first book!",
    description: "The best book ever",
    authors: "John Smith",
    favorite: "string",
    fileCover: "string",
    fileName: "my-first-book",
    fileBook: "public/img/book.webp"
  },
  {
    id: "fe-123-456",
    title: "My second book!",
    description: "Bestseller 2023!",
    authors: "John Smith",
    favorite: "string",
    fileCover: "string",
    fileName: "my-second-book",
    fileBook: "public/img/book.webp"
  }
]
