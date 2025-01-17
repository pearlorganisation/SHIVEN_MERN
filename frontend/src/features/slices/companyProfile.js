import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { createOrUpdateCompanyProfile, getParticularCompanyProfile } from "../actions/companyProfile";



const initialState = {
  isLoading: false,
  isCreated: false,
  companyProfileData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const companyProfileSlice = createSlice({
  name: "companyProfile",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder

      .addCase(createOrUpdateCompanyProfile.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(createOrUpdateCompanyProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.errorMessage = "";
        state.companyProfileData = action.payload.data;
        toast.success(action.payload.data.message,{
          position:"top-center"
        });
      })
      .addCase(createOrUpdateCompanyProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getParticularCompanyProfile.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(getParticularCompanyProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.companyProfileData = action.payload.data;
      })
      .addCase(getParticularCompanyProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
            position:"top-center"
          });
      })
     
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = companyProfileSlice.actions;
export default companyProfileSlice.reducer;
