import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";

import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

export const productRoute = express.Router();

productRoute.get("/", protectRoute, adminRoute, getAllProducts);
productRoute.get("/featured", getFeaturedProducts);
productRoute.get("/recommendations", getRecommendedProducts);
productRoute.post("/", protectRoute, adminRoute, createProduct);
productRoute.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
productRoute.delete("/:id", protectRoute, adminRoute, deleteProduct);
productRoute.get("/category/:category", getProductsByCategory);

