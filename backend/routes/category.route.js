import express from 'express'

import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  toggleEnable,
} from "../controllers/category.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";


export const categoryRoute = express.Router();

//Categories
categoryRoute.get("/", getAllCategories);
categoryRoute.post("/", protectRoute, adminRoute, createCategory);
categoryRoute.put("/:id", protectRoute, adminRoute, updateCategory);
categoryRoute.patch("/:id", protectRoute, adminRoute, toggleEnable);
categoryRoute.delete("/:id", protectRoute, adminRoute, deleteCategory);