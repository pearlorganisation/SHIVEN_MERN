import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { addCustomerProfile, deleteCustomerProfile, getParticularCustomerProfile } from "../actions/customerProfile";


const initialState = {
  isLoading: false,
  isDeleted: false,
  customerProfileData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const customerProfileSlice = createSlice({
  name: "customerProfile",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder

      .addCase(addCustomerProfile.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(addCustomerProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.customerProfileData = action.payload.data;
        toast.success("Customised Form Added Successfully",{
          position:"top-center"
        });
      })
      .addCase(addCustomerProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getParticularCustomerProfile.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getParticularCustomerProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.customerProfileData = action.payload.data;
      })
      .addCase(getParticularCustomerProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      })
      .addCase(deleteCustomerProfile.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
        state.errorMessage = "";
      })
      .addCase(deleteCustomerProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.errorMessage = "";
        state.customerProfileData = action.payload.data;
      })
      .addCase(deleteCustomerProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = customerProfileSlice.actions;
export default customerProfileSlice.reducer;
