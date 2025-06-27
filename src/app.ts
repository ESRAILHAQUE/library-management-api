import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.route";
import borrowRoutes from "./routes/borrow.route";
dotenv.config();

const app:Application = express();



// middleware
app.use(express.json());
// Book routes
app.use("/api",bookRoutes);

// Borrow routes
app.use("/api", borrowRoutes);

app.get("/", (req:Request, res:Response) => {
  res.send({
    message: "Welcome to the Library Management API",
    status: "success",
    data: {
      name: "Library Management API",
      version: "1.0.0",
      description: "An API for managing library operations including books, authors, and members.",
    },
  });
});

export default app;