// -------------------------------------------------Imports----------------------------------------------------
import { asyncErrorHandler } from "../../Utils/Error/asyncErrorHandler";
import { sendEnquiryMail } from "../../Utils/Mail/Enquiry/sendEnquiryMail";
// ------------------------------------------------------------------------------------------------------------

export const enquiryMail = asyncErrorHandler(async (req, res) => {
  await sendEnquiryMail("saksham@pearlorganisation.com");
});
