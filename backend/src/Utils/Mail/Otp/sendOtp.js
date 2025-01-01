// ------------------------------------------------Imports-------------------------------------------------
import nodemailer from "nodemailer";
// --------------------------------------------------------------------------------------------------------

// sendLoginOtp -- function to send the otp in the specified mail
export const sendOtp = (email, otp, type) => {
  const subject = type === "LOGIN" ? "Login OTP" : "Password Reset Request";
  const html =
    type === "LOGIN"
      ? `<h1>Login OTP is <br/>  ${otp}</h1>`
      : `<h1>Password Reset OTP is <br/>  ${otp}</h1>`;
  // transporter -- creating transporter with the mail configurations
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_MAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.NODEMAILER_MAIL,
    to: email,
    subject,
    html,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      } else {
        return resolve("Otp Sent Successfully");
      }
    });
  });
};
