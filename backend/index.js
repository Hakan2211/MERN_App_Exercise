import express from "express";
import "express-async-errors";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleWare from "./middleware/not-found.js";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRouter.js";
import connectDB from "./db/connect.js";
import cors from "cors";
import morgan from "morgan";
import authenticateUser from "./middleware/auth.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/auth", authRouter);
app.use("/api/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
