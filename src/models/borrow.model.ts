import { Document, model,Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";


export interface IBorrowDocument  extends IBorrow ,Document{}
const borrowSchema = new Schema<IBorrowDocument>({
    book: {
        type: Schema.Types.ObjectId, ref: "Book",required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min:1
    },
    dueDate: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});

export const Borrow =model<IBorrowDocument>("Borrow", borrowSchema);