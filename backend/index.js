// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  developmentWhiteListedIpAddresses,
  productionWhiteListedIpAddresses,
} from "./src/Utils/index.js";
import { CustomError } from "./src/Utils/Error/CustomError.js";
import { mongoConnect } from "./src/Configs/DB/mongo.js";
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoConnect();
// -------------------------------------------------------------------------------------------------------------

// ----------------------------------------------Cors Handling--------------------------------------------------
app.use(
  cors({
    origin:
      process.env.NODE_WORKING_ENV === "development"
        ? developmentWhiteListedIpAddresses
        : productionWhiteListedIpAddresses,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    exposedHeaders: ["*", "Authorization"],
  })
);
// -------------------------------------------------------------------------------------------------------------
// ----------------------------------------------Middlewares----------------------------------------------------
// express.json() -- middleware to parse the json data coming from the http request
app.use(express.json());
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Routes----------------------------------------------------

const versionOne = (url) => {
  return `/api/v1/${url}`;
};

// Router Imports
import { userRouter } from "./src/Routes/Auth/User/userRoutes.js";
import { authRouter } from "./src/Routes/Auth/authRoutes.js";

// Route Middlewares
app.use(versionOne("auth/user"), userRouter);
app.use(versionOne("auth/login"), authRouter);

app.all(["/", "/api", "/api/v1"], (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to Shiven",
  });
});
// -------------------------------------------------------------------------------------------------------------

// ------------------------------------------Global Error Handling----------------------------------------------
app.all("*", (req, res, next) => {
  const err = new CustomError(`No such ${req.originalUrl} url exists`, 404);
  next(err);
});

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
});
// -------------------------------------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
// -------------------------------------------------------------------------------------------------------------
