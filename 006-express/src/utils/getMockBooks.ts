import {Book} from "../types/Book";

export const getMockBooks = (): Book[] => [
  {
    id: "fa-345-678",
    title: "My first book!",
    description: "The best book ever",
    authors: "John Smith",
    favorite: "string",
    fileCover: "string",
    fileName: "my-first-book"
  },
  {
    id: "fe-123-456",
    title: "My second book!",
    description: "Bestseller 2023!",
    authors: "John Smith",
    favorite: "string",
    fileCover: "string",
    fileName: "my-second-book"
  }
]
