import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";

//Routes Import
import {
  authRoute,
  productRoute,
  cartRoute,
  analyticsRoute,
  categoryRoute,
} from "./routes/index.js";

dotenv.config();

//Setting up timezones
process.env.TZ = "Africa/Cairo";

const app = express();
const PORT = 5000;

// by default it wont let you upload images that are large,
//therefore setting the limit allows us to upload
app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/analytics", analyticsRoute);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
