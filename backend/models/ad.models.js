import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    exchange: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["electronics", "household", "sportsItems", "kitchenware", "stationeries", "furniture", "other", "studyMaterial"],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user", 
        required: true
    }
}, { timestamps: true });

const Ad = mongoose.model("Ad", adSchema); 

export default Ad; 
