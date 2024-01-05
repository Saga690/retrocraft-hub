import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(process.env.PORT, () => {
    connectToDB();
    console.log(`Backend Server is listening at PORT ${process.env.PORT}`);
})