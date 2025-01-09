import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOffers, intent } from "../controllers/offer.controller.js";

const router = express.Router();

// router.post("/:gigId", verifyToken, createOffer);
router.get("/", verifyToken, getOffers);
router.post("/create-payment-intent/:id", verifyToken, intent);

export default router;