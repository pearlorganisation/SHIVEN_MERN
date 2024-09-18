// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

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
        ? [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5175",
            "https://shiven-mern.vercel.app",
            "https://assetmanagment.in"
          ]
        : [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:5175",
            "https://shiven-mern.vercel.app",
            "https://assetmanagment.in"
          ],
    credentials: false,
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    exposedHeaders: ["*", "Authorization"],
  })
);
// -------------------------------------------------------------------------------------------------------------
// ----------------------------------------------Middlewares----------------------------------------------------
// express.json() -- middleware to parse the json data coming from the http request
app.use(express.json());

// cookieParser() -- middleware to parse the cookie data coming from the http request
app.use(cookieParser());
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Routes----------------------------------------------------

// Router Imports
import { userRouter } from "./src/Routes/Auth/User/userRoutes.js";
import { authRouter } from "./src/Routes/Auth/authRoutes.js";
import { enquiryRouter } from "./src/Routes/Enquiry/enquiryRoutes.js";
import serviceRouter from "./src/Routes/Service/service.js";
import servicePlanRouter from "./src/Routes/Service/servicePlan.js";
import serviceProviderRouter from "./src/Routes/Service/serviceProvider.js";
import mutualFundRouter from "./src/Routes/Service/MutualFund/mutualFundRoutes.js";
import wholeLifeInsurenceRouter from "./src/Routes/Service/WholeLifeInsurence/wholeLifeInsurenceRoutes.js";
import homeLoanRouter from "./src/Routes/Service/HomeLoan/homeLoanRoutes.js";
import motorInsuranceRouter from "./src/Routes/Service/MotorInsurance/BikeInsurance/bikeInsuranceRoutes.js";

// Route Middlewares
app.use("/api/v1/auth/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/enquiry", enquiryRouter);
app.use("/api/v1/service", serviceRouter);
app.use("/api/v1/servicePlan", servicePlanRouter);
app.use("/api/v1/serviceProvider", serviceProviderRouter);

// Mutual Funds - Routes
app.use("/api/v1/mutual-funds/service-plans", mutualFundRouter);

//Whole life insurence - Routes
app.use("/api/v1/whole-life-insurance/service-plans", wholeLifeInsurenceRouter);

//Home Loan - Routes
app.use("/api/v1/home-loan/service-plans", homeLoanRouter);

//Motor Insurance - Routes
app.use("/api/v1/motor-insurance/service-plans", motorInsuranceRouter);


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
  console.log(`Server Running at port http://localhost:${PORT}`);
});
// -------------------------------------------------------------------------------------------------------------
