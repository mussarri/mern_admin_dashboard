import express from "express";
import { getAdmins } from "../controllers/admin.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance", getAdmins);

export default router;
