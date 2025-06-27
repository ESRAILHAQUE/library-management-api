import mongoose, { Document, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

export interface IBookDocument extends IBook, Document {
  updateAvailability: () => Promise<IBookDocument>;
}

const bookSchema = new Schema<IBookDocument>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      required: true,
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },

    available: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

bookSchema.methods.updateAvailability =
  async function (): Promise<IBookDocument> {
    this.available = this.copies > 0;
    return this.save();
  };

export const Book = mongoose.model<IBookDocument>("Book", bookSchema);
