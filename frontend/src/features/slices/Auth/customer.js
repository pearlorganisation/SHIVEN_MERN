// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { createCustomer, getAllCustomers, getParticularConsultantCustomer } from "../../actions/Auth/customer";

//------------------------------------------------------------------------------------------------------------

const initialState = {
  isLoading: false,
  errorMessage: "",
  customerData: {},
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.customerData = action?.payload?.data;
      })
      .addCase(createCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.response.data.message);
      })
      .addCase(getAllCustomers.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.customerData = action?.payload?.data;
      })
      .addCase(getAllCustomers.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      })
      .addCase(getParticularConsultantCustomer.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getParticularConsultantCustomer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.customerData = action?.payload?.data;
      })
      .addCase(getParticularConsultantCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      })
  },
});

export const customerReducer = customerSlice.reducer;
export const { resetUserState } = customerSlice.actions;
