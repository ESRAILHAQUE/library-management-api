import { ErrorRequestHandler } from "express";
import mongoose from "mongoose";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: {
        name: err.name,
        errors: err.errors,
      },
    });
    return;
  }

  // Handle all other errors
  res.status(500).json({
    message: err.message || "Something went wrong",
    success: false,
    error: err,
  });
};
