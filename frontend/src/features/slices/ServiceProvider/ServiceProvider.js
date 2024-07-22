import { createSlice } from "@reduxjs/toolkit";
import { serviceProviderAction } from "../../actions/serviceProvider/serviceProvider";

const initialState = {
  isLoading: false,
  errorMessage: "",
  serviceProviderData: [],
};

const serviceProviderSlice = createSlice({
  name: "serviceProvider",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(serviceProviderAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(serviceProviderAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        console.log("we are here ", action.payload.data);
        state.serviceProviderData = action.payload.data;
      })
      .addCase(serviceProviderAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const serviceProviderReducer = serviceProviderSlice.reducer;
