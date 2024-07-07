import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import Book from "./model/bookModel.js";
import cors from "cors"
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

//connect backend and frontend
app.use(cors({
  //accept the request from this url only
  origin: "http://localhost:5173"
}))
//apply the routes
import bookRoutes from "./routes/bookRoutes.js"
app.use(bookRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
