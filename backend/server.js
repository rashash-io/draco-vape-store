import express from "express";

// Routes import
import authRoutes from "./routes/auth.routes.js"

const app = express();
const PORT = 5000;

//Routes
app.use("/api/auth", authRoutes);

app.listen( PORT, ()=>{
  console.log("Server is running on http://localhost:"+PORT);
});