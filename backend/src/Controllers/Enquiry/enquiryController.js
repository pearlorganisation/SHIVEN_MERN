// -------------------------------------------------Imports----------------------------------------------------
import { CustomError } from "../../Utils/Error/CustomError.js";
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler.js";
import { sendEnquiryMail } from "../../Utils/Mail/Enquiry/sendEnquiryMail.js";
import { pick } from "lodash-es";
// ------------------------------------------------------------------------------------------------------------

export const enquiryMail = asyncErrorHandler(async (req, res) => {
  const payload = req?.body?.payload;

  if (!payload) {
    return next(new CustomError("Payload is a required field", 400));
  }

  const sanitizedPayload = pick(payload, [
    `${"carNumber" || "bikeNumber" || "policyNumber" || "ticketNumber"}`,
    "mobileNumber",
    "email",
  ]);

  const htmlContent = `<h1>Below mentioned user has some queries?</h1><br/><ul><li>Email : ${sanitizedPayload?.email}</li><br/><li>Mobile Number: ${sanitizedPayload?.mobileNumber}</li></ul>`;

  await sendEnquiryMail(sanitizedPayload?.email, htmlContent);

  return res.status(200).json({
    success: true,
    message: "Enquiry Mail sent successfully",
  });
});
