// ----------------------------------------------Imports-------------------------------------------------------
import nodemailer, { createTransport } from "nodemailer";
// ------------------------------------------------------------------------------------------------------------

export const sendEnquiryMail = (email, htmlContent) => {
  const transporter = createTransport({
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
    subject: "Consultation Enquiry",
    html: htmlContent,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      } else {
        return resolve("Mail Sent Successfully");
      }
    });
  });
};
