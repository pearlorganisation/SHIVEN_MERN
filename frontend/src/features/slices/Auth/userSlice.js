// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import {
  createUser,
  getConsultants,
  getConsultantWithPopulated,
  getUsers,
  updateConsultant,
  updateConsultantPlans,
  updateConsultantStatus,
  updateUser,
} from "../../actions/Auth/userActions";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isUserLoading: false,
  errorMessage: "",
  usersData: {},
  isUserCreated: false,
  consultants:[]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state, action) => {
      state.isUserCreated = action.payload;
    },
    clearReduxStoreData: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      // createUser lifecycle actions
      .addCase(createUser.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
        state.isLoginOtpSent = false;
        state.isUserCreated = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.isLoginOtpSent = true;
        state.isUserCreated = true;
        toast.success("User Created Successfully");
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        state.isUserCreated = false;
        toast.error(action.payload.message);
      })
      // updateUser lifecycle actions
      .addCase(updateUser.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
        state.isLoginOtpSent = false;
        state.isUserCreated = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.isLoginOtpSent = true;
        state.isUserCreated = true;
        toast.success("User Updated Successfully");
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        state.isUserCreated = false;
        toast.error(action.payload.message);
      })  
      // getUsers lifecycle actions
      .addCase(getUsers.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.usersData = action?.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      })
      .addCase(getConsultants.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
      })
      .addCase(getConsultants.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.consultants = action?.payload?.data;
        state.usersData.users = action?.payload?.data;
      })
      .addCase(getConsultants.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      })
      .addCase(updateConsultantStatus.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
      })
      .addCase(updateConsultantStatus.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.consultants = action?.payload?.data;
      })
      .addCase(updateConsultantStatus.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      })
      .addCase(getConsultantWithPopulated.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
      })
      .addCase(getConsultantWithPopulated.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.consultants = action?.payload?.data;
      })
      .addCase(getConsultantWithPopulated.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      })
      .addCase(updateConsultant.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
      })
      .addCase(updateConsultant.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.consultants = action?.payload?.data;
      })
      .addCase(updateConsultant.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      })
      .addCase(updateConsultantPlans.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
      })
      .addCase(updateConsultantPlans.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.consultants = action?.payload?.data;
        toast.success("Consultant Plans Updated Sucessfully.")
      })
      .addCase(updateConsultantPlans.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      });
  },
});

export const userReducer = userSlice.reducer;
export const { resetUserState } = userSlice.actions;
