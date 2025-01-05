import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createOffer, getOffers } from "../controllers/offer.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOffer);
router.get("/", verifyToken, getOffers);

export default router;