import express, { Request, Response } from "express";
import { globalErrorHandler } from "./common/middleware/globalErrorHandler";
import cookieParser from "cookie-parser";
import authRouter from "../src/routes/auth"

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from auth service service!" });
});

app.use("/auth",authRouter)

app.use(globalErrorHandler);

export default app;
