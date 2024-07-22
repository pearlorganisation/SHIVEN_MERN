import { createSlice } from "@reduxjs/toolkit";
import { servicePlanAction } from "../../actions/servicePlan/servicePlan";

const initialState = {
  isLoading: false,
  errorMessage: "",
  servicePlanData: [],
};

const servicePlanSlice = createSlice({
  name: "servicePlan",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(servicePlanAction.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })

      .addCase(servicePlanAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        console.log("we are here ", action.payload.data);
        state.servicePlanData = action.payload.data;
      })

      .addCase(servicePlanAction.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});
export const servicePlanReducer = servicePlanSlice.reducer;
