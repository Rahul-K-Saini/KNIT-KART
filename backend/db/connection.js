import mongoose from "mongoose"

const connectToDB = (url) => {
    mongoose.connect(url).then(() => console.log("Connected to MongoDB")).catch((err) => console.log("Error Connecting MongoDB", err));
}


export default connectToDB;