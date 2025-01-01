// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { changePassword, forgotPassword, login, logout, verifyForgotPassword, verifyLoginOtp } from "../../actions/Auth/authActions";
import { toast } from "sonner";

//------------------------------------------------------------------------------------------------------------

const initialState = {
  isLoginLoading: false,
  isUserLoggedIn: false,
  loggedInUserData: {},
  errorMessage: "",
  isLoginOtpSent: false,
  isLoading: false,
  response:{},
  isForgotPasswordOtpSent:false,
  isVerifiedOTP:false,
  isPasswordChanged:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoginState: (state, action) => {
      state.isLoading = false;
      state.isLoginOtpSent = false
      state.isForgotPasswordOtpSent= false
      state.isVerifiedOTP=false
      state.isPasswordChanged=false
    },
    clearReduxStoreData: (state, action) => {},
     isUserLoggedInTrue : (state, action) => {
      state.isUserLoggedIn = true,
      state.isLoginOtpSent = false;
     }
  },
  extraReducers: (builder) => {
    builder
      // login lifecycle actions
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.loggedInUserData = action?.payload?.data;
        state.response = action?.payload;
        state.isLoginOtpSent = true;
        toast.success("OTP for verification sent successfully");
     
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.isLoginOtpSent = false;
        toast.error(action.payload.response.data.message);
        console.log(state.errorMessage);
      })
      // verifyLoginOtp lifecycle actions
      .addCase(verifyLoginOtp.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
      })
      .addCase(verifyLoginOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.loggedInUserData = action?.payload.data;
        state.isUserLoggedIn = true;
        toast.success("Logged In successfully");
      })
      .addCase(verifyLoginOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.loggedInUserData = {};
        state.isUserLoggedIn = false;
        toast.error(action?.payload?.response?.data?.message || "Error!");
      })
      // logout lifecycle actions
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
        state.response ={}
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
        state.response ={}
        toast.success("Logout successfully");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action?.payload?.response?.data?.message || "Error!");
        state.response ={}
      })
      .addCase(forgotPassword.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.isForgotPasswordOtpSent= false;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isLoginOtpSent = false;
        state.isForgotPasswordOtpSent= true;
        toast.success("OTP for verification sent successfully");
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.isForgotPasswordOtpSent= false
        toast.error(action.payload.response.data.message);
        console.log(state.errorMessage);
      })
      .addCase(verifyForgotPassword.pending, (state, action) => {
        state.isLoading = true;
        state.isVerifiedOTP = false;
        state.errorMessage = "";
      })
      .addCase(verifyForgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isVerifiedOTP = true;
        state.errorMessage = "";
        toast.success("OTP Verified Successfully");
      })
      .addCase(verifyForgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isVerifiedOTP = false;
        state.errorMessage = action?.payload;
        toast.error(action?.payload?.response?.data?.message || "Error!");
      })
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
        state.isPasswordChanged = false;
        state.errorMessage = "";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isVerifiedOTP = false;
        state.isPasswordChanged = true;
        state.errorMessage = "";
        toast.success("Password Changed Successfully");
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isPasswordChanged = false;
        state.errorMessage = action?.payload;
        toast.error(action?.payload?.response?.data?.message || "Error!");
      })
  },
});

export const authReducer = authSlice.reducer;
export const { resetLoginState, clearReduxStoreData ,isUserLoggedInTrue} = authSlice.actions;
