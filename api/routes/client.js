import { Router } from "express";
import { getCustomers, getDashboardStats, getLocations, getProducts, getTransactions } from "../controllers/client.js";

const router = Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/locations", getLocations);
router.get("/dashboard", getDashboardStats)

export default router;
