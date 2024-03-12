// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { developmentWhiteListedIpAddresses, productionWhiteListedIpAddresses } from "./src/Utils/index.js";
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
app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
// -------------------------------------------------------------------------------------------------------------
