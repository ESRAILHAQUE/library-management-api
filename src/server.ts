import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db";
import app from "./app";



async function startServer() {
    await connectDB();
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });

}
startServer();


