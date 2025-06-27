import { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.model";



export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = 10,
    } = req.query as {
      filter?: string;
      sortBy?: string;
      sort?: "asc" | "desc";
      limit?: number;
    };
    const query = filter ? { genre: filter } : {};
    const books = await Book.find(query)
      .sort({ [sortBy]: sort === "asc" ? 1 : -1 })
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving books",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getBookById = async (req: Request, res: Response):Promise<void> => {
    try {
        const bookId = req.params.id;
        const book = await Book.findById(bookId);
        if (!book) {
             res.status(404).json({
                success: false,
                message: "Book not found",
            });
            return;
        }   
        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving book",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }   
};

export const updateBook=async (req: Request, res: Response):Promise<void> => {
    try {
        const bookId = req.params.id;
        const book = await Book.findByIdAndUpdate(
            bookId,
            req.body,
            { new: true, runValidators: true }  
        );
        if (!book) {
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating book",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};

export const deleteBook =async (req: Request, res: Response):Promise<void> => {
    try {
        const bookId = req.params.id;
        const book = await Book.findByIdAndDelete(bookId);
        if (!book) {    
            res.status(404).json({
                success: false,
                message: "Book not found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data:null,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting book",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
};