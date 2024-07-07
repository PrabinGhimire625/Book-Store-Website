import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  bookName: { type: String, unique: true },
  bookPrice: { type: Number },
  isbnNumber: { type: Number },
  authorName: { type: String },
  publishedAt: { type: String },
  publication:{type: String},
  description:{type:String}
});

const Book=mongoose.model('Book', bookSchema);

export default Book;
