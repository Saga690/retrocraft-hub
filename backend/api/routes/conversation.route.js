import express from "express";
import { createConversation, getConversations, getSingleConversations, updateConversation } from "../controllers/conversation.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversations);
router.put("/:id", verifyToken, updateConversation);

export default router;