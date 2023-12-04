import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import taskRoute from "./routes/task.routes";
import dbConnection from "./config/db";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api", taskRoute);

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
