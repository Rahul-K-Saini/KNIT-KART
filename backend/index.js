import express from "express";
import connectToDB from "./db/connection.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import adRouter from "./routes/ad.route.js";
import cors from "cors";
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Now you can safely access the environment variables
console.log(process.env.MONGO_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get("/", (req, res) => {
  res.send("Knit-Kart");
});

app.use("/user", userRouter);
app.use("/ad", adRouter);

connectToDB(process.env.MONGO_URL);

app.listen(port, () => {
  console.log("Server started on port " + port);
});