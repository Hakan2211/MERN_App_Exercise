import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleWare from "./middleware/not-found.js";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRouter.js";
import connectDB from "./db/connect.js";
dotenv.config();

const app = express();

// Middleware

app.use(express.json());

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("Welcome");
});

app.use("/api/auth", authRouter);
app.use("/api/jobs", jobsRouter);

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
