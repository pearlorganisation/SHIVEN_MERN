// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { motorEnquiry } from "../../actions/Enquiry/motorEnquiryAction";

//------------------------------------------------------------------------------------------------------------

const initialState = {
  isEnquiryLoading: false,
  errorMessage: "",
  isEnquirySent: false,
};

const motorEnquirySlice = createSlice({
  name: "motorenquiry",
  initialState,
  reducers: {
    resetEnquiryState: (state, action) => {
      state.isEnquirySent = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // enquiry lifecycle actions
      .addCase(motorEnquiry.pending, (state, action) => {
        state.isEnquiryLoading = true;
        state.errorMessage = "";
        state.isEnquirySent = false;
      })

      .addCase(motorEnquiry.fulfilled, (state, action) => {
        state.isEnquiryLoading = false;
        state.errorMessage = "";
        state.isEnquirySent = true;
        toast.success("Enquiry Data sent successfully");
      })

      .addCase(motorEnquiry.rejected, (state, action) => {
        state.isEnquiryLoading = false;
        state.errorMessage = action?.payload;
        state.isEnquirySent = false;
        toast.error(action.payload.message);
      });
  },
});

export const motorenquiryReducer = motorEnquirySlice.reducer;
export const { resetEnquiryState } = motorEnquirySlice.actions;
