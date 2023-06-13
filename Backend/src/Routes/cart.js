import express from "express";
import { addItemToCart, decreaseQuantity, getCart, removeItem } from "../Controllers/cart";
const router = express.Router();


router.post("/cart", addItemToCart);
router.get("/cart", getCart);
router.patch("/cart/:id", decreaseQuantity)
router.delete("/cart/:id", removeItem)


export default router;