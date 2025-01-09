import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOffers, intent, confirm } from "../controllers/offer.controller.js";

const router = express.Router();

// router.post("/:gigId", verifyToken, createOffer);
router.get("/", verifyToken, getOffers);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;