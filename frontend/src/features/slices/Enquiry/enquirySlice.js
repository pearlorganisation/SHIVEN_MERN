// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { enquiryMail } from "../../actions/Enquiry/enquiryActions";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isEnquiryLoading: false,
  errorMessage: "",
  isEnquiryMailSent: false,
};

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    resetEnquiryState: (state, action) => {
      state.isEnquiryMailSent = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // enquiry lifecycle actions
      .addCase(enquiryMail.pending, (state, action) => {
        state.isEnquiryLoading = true;
        state.errorMessage = "";
        state.isEnquiryMailSent = false;
      })
      .addCase(enquiryMail.fulfilled, (state, action) => {
        state.isEnquiryLoading = false;
        state.errorMessage = "";
        state.isEnquiryMailSent = true;
        toast.success("Enquiry Mail sent successfully");
      })
      .addCase(enquiryMail.rejected, (state, action) => {
        state.isEnquiryLoading = false;
        state.errorMessage = action?.payload;
        state.isEnquiryMailSent = false;
        toast.error(action.payload.message);
      });
  },
});

export const enquiryReducer = enquirySlice.reducer;
export const {resetEnquiryState} = enquirySlice.actions;
