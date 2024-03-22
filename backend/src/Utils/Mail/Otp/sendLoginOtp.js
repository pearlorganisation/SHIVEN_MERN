// ------------------------------------------------Imports-------------------------------------------------
import nodemailer from "nodemailer";
// --------------------------------------------------------------------------------------------------------

// sendLoginOtp -- function to send the otp in the specified mail
export const sendLoginOtp = (email, otp) => {
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
    subject: "Shiven Login Otp",
    html: `<h1>Login OTP is <br/>  ${otp}</h1>`,
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
