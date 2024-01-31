import express from "express";
import { getProducts, addProduto } from "./product.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", addProduto);

export default router;
