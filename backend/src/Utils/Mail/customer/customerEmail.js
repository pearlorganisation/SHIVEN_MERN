// ------------------------------------------------Imports-------------------------------------------------
import nodemailer from "nodemailer";
// --------------------------------------------------------------------------------------------------------


export const sendCustomerAccountCreated = (email,fullName,password) => {
  const subject = "Your Account Created Successfully";
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
      <h1 style="color: #4CAF50;">Congratulations!</h1>
      <p>Dear ${fullName},</p>
      <p>Your account has been successfully created, and you're all set to get started!</p>
     <p><strong>Here are your login details:</strong></p>
  <ul style="list-style-type: none; padding: 0;">
    <li><strong>Email:</strong> <span style="color: #4CAF50;">${email}</span></li>
    <li><strong>Password:</strong> <span style="color: #4CAF50;">${password}</span></li>
  </ul>
   <div style="text-align: center; margin: 30px 0;">
    <a href="https://app.assetmanagment.in/login" 
       style="background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
       Login Now
    </a>
  </div>
  
  <p style="margin-top: 20px;">We recommend changing your password after your first login for added security.</p>
  
  <br/>
  <p style="color: #777; font-size: 12px; text-align: center;">If you encounter any issues, please reach out to our support team at <a href="mailto:support@example.com" style="color: #4CAF50;">support@example.com</a>.</p>
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
        return resolve("Customer Account Created Email Sent Successfully");
      }
    });
  });
};
