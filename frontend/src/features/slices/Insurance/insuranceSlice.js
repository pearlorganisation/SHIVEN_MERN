// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { enquiryMail } from "../../actions/Enquiry/enquiryActions";
import { getInsurances } from "../../actions/Insurance/insuranceActions";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isInsuranceLoading: false,
  errorMessage: "",
  insurancesData: {},
};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    resetInsuranceState: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      // enquiry lifecycle actions
      .addCase(getInsurances.pending, (state, action) => {
        state.isInsuranceLoading = true;
        state.errorMessage = "";
      })
      .addCase(getInsurances.fulfilled, (state, action) => {
        state.isInsuranceLoading = false;
        state.errorMessage = "";
        state.insurancesData = action.payload;
      })
      .addCase(getInsurances.rejected, (state, action) => {
        state.isInsuranceLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      });
  },
});

export const insuranceReducer = insuranceSlice.reducer;
export const { resetInsuranceState } = insuranceSlice.actions;
