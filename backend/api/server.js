import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import offerRoute from "./routes/offer.route.js";
import reviewRoute from "./routes/review.route.js";

dotenv.config();

const app = express();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log(error);
    }
}

app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/offers", offerRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);


app.listen(process.env.PORT, () => {
    connectToDB();
    console.log(`Backend Server is listening at PORT ${process.env.PORT}`);
})