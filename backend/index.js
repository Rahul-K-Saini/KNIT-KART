import express from "express";
import connectToDB from "./db/connection.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  res.send("Knit-Kart");
});

app.use("/user", userRouter);

connectToDB(process.env.MONGODB_URL || "mongodb://localhost:27017/knit-kart");

app.listen(port, () => {
  console.log("Server started on port " + port);
});

