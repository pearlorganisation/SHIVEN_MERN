import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { createServicePlan, getAllServicePlans, getServicePlansByServices } from "../../actions/Service/servicePlan";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isDeleted: false,
  servicePlanData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const servicePlanSlice = createSlice({
  name: "servicePlanSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createServicePlan.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createServicePlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.servicePlanData = action.payload.data;
        toast.success("Service Plan Added Successfully", {
          position: "top-center",
        });
      })
      .addCase(createServicePlan.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong", {
          position: "top-center",
        });
      })
      .addCase(getAllServicePlans.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getAllServicePlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.servicePlanData = action.payload.data;
      })
      .addCase(getAllServicePlans.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong", {
          position: "top-center",
        });
      })
      .addCase(getServicePlansByServices.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getServicePlansByServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.servicePlanData = action.payload.data;
      })
      .addCase(getServicePlansByServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong", {
          position: "top-center",
        });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = servicePlanSlice.actions;
export default servicePlanSlice.reducer;
