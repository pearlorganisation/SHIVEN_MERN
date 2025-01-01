// ---------------------------------------------Imports--------------------------------------------------
import { Router } from "express";
import { verifyTokenMiddleware } from "../../Middlewares/Token/verifyTokenMiddleware.js";
import { createCustomer, getAllCustomers, getParticularConsultantCustomers } from "../../Controllers/Auth/customer.js";


// ------------------------------------------------------------------------------------------------------

export const customerRouter = Router();
// -------------------------------------------------------------------------------------------------------


customerRouter.route("/").post(createCustomer).get(getAllCustomers);
customerRouter.route("/:id").get(getParticularConsultantCustomers);


