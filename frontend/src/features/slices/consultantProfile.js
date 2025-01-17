import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { createOrUpdateConsultantProfile, getParticularConsultantProfile } from "../actions/consultantProfile";



const initialState = {
  isLoading: false,
  isCreated: false,
  consultantProfileData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const consultantProfileSlice = createSlice({
  name: "consultantProfile",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder

      .addCase(createOrUpdateConsultantProfile.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(createOrUpdateConsultantProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreated = true;
        state.errorMessage = "";
        state.consultantProfileData = action.payload.data;
        toast.success(action.payload.data.message,{
          position:"top-center"
        });
      })
      .addCase(createOrUpdateConsultantProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isCreated = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong",{
          position:"top-center"
        });
      })
      .addCase(getParticularConsultantProfile.pending, (state, action) => {
        state.isLoading = true;
        state.isCreated = false;
        state.errorMessage = "";
      })
      .addCase(getParticularConsultantProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.consultantProfileData = action.payload.data;
      })
      .addCase(getParticularConsultantProfile.rejected, (state, action) => {
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
export const {} = consultantProfileSlice.actions;
export default consultantProfileSlice.reducer;
