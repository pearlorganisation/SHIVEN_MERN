import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {  getAllServices, updateService } from "../../actions/Service/service";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isDeleted: false,
  serviceData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const serviceSlice = createSlice({
  name: "serviceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(updateService.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.serviceData = action.payload.data;
        toast.success("Service Updated Successfully",{
          position:"top-center"
        });
      })
      .addCase(updateService.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getAllServices.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.serviceData = action.payload.data;
      })
      .addCase(getAllServices.rejected, (state, action) => {
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
export const {} = serviceSlice.actions;
export default serviceSlice.reducer;
