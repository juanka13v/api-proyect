import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/products.controllers";
import { verifyToken, isModerator } from "../middlewares";
const router = Router();

router.post("/", [verifyToken, isModerator], createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", verifyToken, updateProductById);
router.delete("/:id", [verifyToken, isModerator], deleteProductById);

export default router;
