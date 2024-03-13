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
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
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

// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Routes----------------------------------------------------
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
