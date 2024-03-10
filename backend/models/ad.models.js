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
        enum: ["Electronics and gadgets", "Household", "Sports Items", "Kitchenware", "Stationaries", "Furniture", "Others"],
        required: true
    }
},{timestamps:true});

export default Ad = mongoose.model("ad", adSchema);