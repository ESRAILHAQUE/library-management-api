import express from "express";
import { borrowBook, getBorrowSummary } from "../controllers/borrow.controller";


const router = express.Router();

router.post("/borrow",borrowBook);
router.get("/borrow",getBorrowSummary);

export default router;