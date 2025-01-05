import mongoose from "mongoose";
const { Schema } = mongoose;

const offerSchema = new Schema({
    gigId: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    buyerId: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    payment_intent: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

export default mongoose.model("Offer", offerSchema)