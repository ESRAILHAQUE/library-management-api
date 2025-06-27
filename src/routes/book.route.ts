
import express from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book.controller";
const router=express.Router();

router.post("/books",createBook );
router.get("/books",getAllBooks);
router.get("/books/:id",getBookById);
router.put("/books/:id",updateBook); 
router.delete("/books/:id",deleteBook);

export default router;