// -----------------------------------------------Imports------------------------------------------------
import bcrypt from "bcrypt";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { userModel } from "../../Models/Auth/User/userModel.js";
import { CustomError } from "../../Utils/Error/CustomError.js";
import { sendOtp } from "../../Utils/Mail/Otp/sendOtp.js";
import { otpModel } from "../../Models/Otp/otpModel.js";
import moment from "moment";
import jwt from "jsonwebtoken";
import { saveAccessTokenToCookie } from "../../Utils/index.js";
import { generateOTP } from "../../Utils/Mail/Otp/generateOTP.js";
import customerModel from "../../Models/Auth/customer.js";
// ------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// @desc - login
// @method- POST
// @url - auth/login
export const login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req?.body?.payload;
  if (!email || !password) {
    const error = new CustomError(
      "Please Provide Email/Password for logging in",
      400
    );
    return next(error);
  }

  const [consultantAndAdmin, customer] = await Promise.all([
    userModel.findOne({ email }),
    customerModel.findOne({ email })
  ]);
  
  const user = consultantAndAdmin || customer;
  
  const comparison = await bcrypt.compare(password, user?.password);
  
  if (!comparison) {
    const error = new CustomError("Invalid Email/Password", 400);
    return next(error);
  }
if(customer){
  const token = jwt.sign(
    {
      userId: customer?._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_VALIDITY,
    }
  );

  saveAccessTokenToCookie(res, token);

 return res.status(200).json({status:true,login:true,message:"Login Successful",data:customer});

}
  const otp = generateOTP();
  let otpDoc = await otpModel.findOneAndUpdate(
    { email, type: "LOGIN" },
    { otp, expiresAt: new Date(Date.now() + 600000) },
    { $new: true }
  );

  if (!otpDoc) {
     otpDoc = new otpModel({
      email,
      type: "LOGIN",
      otp,
      expiresAt: new Date(Date.now() + 600000), //10min
    });
  }
  await sendOtp(email, otp, "LOGIN");
  await otpDoc.save();

  return res.status(200).json({
    status: true,
    message: "Otp for mail verification sent successfully",
  });
});


// @desc - login otp verification
// @method- POST
// @url - auth/login/verify
export const verifyLoginOtp = asyncErrorHandler(async (req, res, next) => {
  const { email, otp } = req?.body?.payload;

  if (!email || !otp) {
    const error = new CustomError(
      "Please Provide Email/Otp for logging in",
      400
    );
    return next(error);
  }

  const otpDoc = await otpModel.findOne({ email });

  if (!otpDoc) {
    const error = new CustomError("No such Email exists");
    next(error);
  }

  let currentDate = moment();
  let expiresAt = moment(otpDoc.expiresAt);

  if (currentDate.isBefore(expiresAt)) {
    // response -- generic response for the login success or failure
    let response = (statusCode, succ, msg) => {
      return res.status(statusCode).json({
        success: succ,
        message: msg,
      });
    };

    // comparing the otp with the stored otp
    if (otp === otpDoc.otp) {
      

      const userDoc = await userModel.findOne({ email }) 

      const token = jwt.sign(
        {
          userId: userDoc?._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.ACCESS_TOKEN_VALIDITY,
        }
      );

      saveAccessTokenToCookie(res, token);

      res.status(200).json({status:true,message:"Login Successful",data:userDoc});
    } else {
      response(400, false, "Invalid Otp");
    }
  } else {
    const error = new CustomError("Otp Expired! Resend Otp");
    next(error);
  }
});

// @desc - logout
// @method- POST
// @url - auth/logout
export const logout = asyncErrorHandler(async (req, res, next) => {
  res.clearCookie("SHIVEN_ACCESS_TOKEN");

  return res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

// @desc - logout
//@method- POST
// @url - auth/refreshToken
export const refreshToken = asyncErrorHandler(async (req, res, next) => {
  console.log(req?.userId);
  return res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

export const forgotPassword = asyncErrorHandler(async (req, res, next) => {
  const { email} = req?.body?.payload

  const [consultantAndAdmin, customer] = await Promise.all([
    userModel.findOne({ email }),
    customerModel.findOne({ email })
  ]);
  
  const user = consultantAndAdmin || customer;

  const otp = generateOTP();
  let otpDoc = await otpModel.findOneAndUpdate(
    { email, type: "FORGOTPASSWORD" },
    { otp, expiresAt: new Date(Date.now() + 600000) },
    { $new: true }
  );

  if (!otpDoc) {
     otpDoc = new otpModel({
      email,
      type: "FORGOTPASSWORD",
      otp,
      expiresAt: new Date(Date.now() + 600000), //10min
    });
  }
  await sendOtp(email, otp, "FORGOTPASSWORD");
  await otpDoc.save();

  return res.status(200).json({
    status: true,
    message: "Otp for mail verification sent successfully",
  });
});

export const verifyForgotPasswordOtp = asyncErrorHandler(async (req, res, next) => {
  const { email, otp } = req?.body?.payload;

  if (!email || !otp) {
    const error = new CustomError(
      "Please Provide Email/Otp for logging in",
      400
    );
    return next(error);
  }

  const otpDoc = await otpModel.findOne({ email,type:"FORGOTPASSWORD" });

  if (!otpDoc) {
    const error = new CustomError("No such Email exists");
    next(error);
  }

  let currentDate = moment();
  let expiresAt = moment(otpDoc.expiresAt);

  if (currentDate.isBefore(expiresAt)) {
    // response -- generic response for the login success or failure
    let response = (statusCode, succ, msg) => {
      return res.status(statusCode).json({
        success: succ,
        message: msg,
      });
    };

    // comparing the otp with the stored otp
    if (otp === otpDoc.otp) {
      res.status(200).json({status:true,message:"Otp Verified Successfully",isForgotPassword:true});
    } else {
      response(400, false, "Invalid Otp");
    }
  } else {
    const error = new CustomError("Otp Expired! Resend Otp");
    next(error);
  }
});
export const changePassword = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req?.body?.payload;
  const salt = await bcrypt.genSalt(10);

 const  hashPassword = await bcrypt.hash(password, salt);

await Promise.all([
    userModel.findOneAndUpdate({ email },{password:hashPassword}),
    customerModel.findOneAndUpdate({ email },{password:hashPassword})
  ]);

 
  res.status(201).json({status:true,message:"Password Changed Successfully"});


});