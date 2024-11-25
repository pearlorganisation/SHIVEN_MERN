// ------------------------------------------------Imports-------------------------------------------------
import nodemailer from "nodemailer";
// --------------------------------------------------------------------------------------------------------

// sendConsultantAccountCreated -- function to notify the consultant of successful account creation and payment
export const sendConsultantAccountCreated = (email) => {
    console.log(email);
  const subject = "Consultant Account Created Successfully";
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h1 style="color: #4CAF50;">Congratulations!</h1>
      <p>Dear Consultant,</p>
      <p>Your payment was successful, and your account has been created successfully!</p>
      <p>Please note that your account requires verification by an admin before you can log in. Once approved, you'll receive a confirmation email, and you'll be able to access your account.</p>
      <p style="margin-top: 20px;">Thank you for your patience!</p>
      <br/>
      <p style="color: #777; font-size: 12px;">If you have any questions, feel free to reach out to our support team.</p>
    </div>
  `;

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
        return resolve("Consultant Account Created Email Sent Successfully");
      }
    });
  });
};

// sendAccountVerified -- function to notify consultant when the admin verifies their account successfully
export const sendAccountVerified = (email) => {
  const subject = "Account Verified Successfully";
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h1 style="color: #4CAF50;">Your Account is Verified!</h1>
      <p>Dear Consultant,</p>
      <p>We are pleased to inform you that your account has been successfully verified by the admin. You can now log in and start using your account.</p>
      <p style="margin-top: 20px;">Welcome aboard!</p>
      <br/>
      <p style="color: #777; font-size: 12px;">If you have any questions or need further assistance, feel free to reach out to our support team.</p>
    </div>
  `;

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
        return resolve("Account Verified Email Sent Successfully");
      }
    });
  });
};
