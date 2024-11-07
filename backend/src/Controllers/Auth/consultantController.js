import Consultant from "../../Models/Auth/consultantModel.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import crypto from "crypto";
import { razorpayInstance } from "../../Configs/razorPay.js";

export const createConsultant = asyncErrorHandler(async (req, res) => {
  const newConsultant = await Consultant.create(req?.body);

  const options = {
    amount: Number(req?.body?.amount * 100),
    currency: "INR",
  };

  razorpayInstance.orders
  .create(options)
  .then((order) => {
    res.status(200).json({
      success: true,
      order,
      consultantId: newConsultant?._id,
    });
  })
  .catch(async (err) => {
    await Consultant.findByIdAndDelete(newConsultant._id);
    return res.status(400).json({
      status: false,
      message: err?.message || err,
    });
  });


})

export const verifyConsultant = asyncErrorHandler(async (req, res) => {
  try {
    const { razorpay_consultant_id, razorpay_payment_id, razorpay_signature } =
      await req.body;

    const body = razorpay_consultant_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    if (!isAuthentic) {
      await Consultant.findByIdAndDelete(req?.params?.id);
      return res.redirect(
        `${process.env.FRONTEND_LIVE_URL}/verificationFailed/`
      );
    }

    const updateConsultant = await Consultant.findByIdAndUpdate(
      req?.params?.id,
      {
        razorpay_consultant_id,
        isVerified: true,
        razorpay_payment_id,
      }
    );

    res.status(200).json({
      status: true,
      message: "Consultant verified successfully!!",
      data: updateConsultant,
    });
  } catch (e) {
    await Consultant.findByIdAndDelete(req?.params?.id);
    res
      .status(400)
      .json({ status: false, message: e?.message || "Internal server error" });
  }
});
