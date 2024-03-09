import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    exchange_item: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    catagory: {
        type: String,
        enum: ["Electronics and gadgets", "Household", "Sports Items", "Kitchenware", "Stationaries", "Furniture", "Others"]
    }
});

export const User = mongoose.model("ad", adSchema);