import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { createServiceProvider, getAllServiceProviders, getAllServiceProvidersForDropdown } from "../../actions/Service/serviceProvider";


const initialState = {
  isLoading: false,
  isSuccess: false,
  isDeleted: false,
  serviceProviderData: [],
  providerDropdownData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const serviceProviderSlice = createSlice({
  name: "serviceProviderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createServiceProvider.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createServiceProvider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.serviceProviderData = action.payload.data;
        toast.success("Service Provider Added Successfully",{
          position:"top-center"
        });
      })
      .addCase(createServiceProvider.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getAllServiceProviders.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getAllServiceProviders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.serviceProviderData = action.payload.data;
      })
      .addCase(getAllServiceProviders.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      })
      .addCase(getAllServiceProvidersForDropdown.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getAllServiceProvidersForDropdown.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.providerDropdownData = action.payload.data;
      })
      .addCase(getAllServiceProvidersForDropdown.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = serviceProviderSlice.actions;
export default serviceProviderSlice.reducer;
