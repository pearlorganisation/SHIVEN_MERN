// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { enquiryMail } from "../../actions/Enquiry/enquiryActions";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isEnquiryLoading: false,
  errorMessage: "",
  isFilter: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    resetEnquiryState: (state, action) => {
      state.isEnquiryMailSent = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // enquiry lifecycle actions
      .addCase(filterAction.pending, (state, action) => {
        state.isFilterLoading = true;
        state.errorMessage = "";
        state.isFilter = false;
      })
      .addCase(filterAction.fulfilled, (state, action) => {
        state.isFilterLoading = false;
        state.errorMessage = "";
        state.isFilter = true;
      })
      .addCase(filterAction.rejected, (state, action) => {
        state.isFilterLoading = false;
        state.errorMessage = action?.payload;
        state.isFilter = false;
      });
  },
});
