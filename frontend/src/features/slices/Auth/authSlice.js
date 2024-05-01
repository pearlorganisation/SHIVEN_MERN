// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login, verifyLoginOtp } from "../../actions/Auth/authActions";
import { toast } from "sonner";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isLoginLoading: false,
  isUserLoggedIn: true,
  loggedInUserData: {},
  errorMessage: "",
  isLoginOtpSent: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoginState: (state, action) => {
      state.isLoginOtpSent = action.payload;
    },
    clearReduxStoreData: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      // login lifecycle actions
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.isLoginOtpSent = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isLoginOtpSent = true;
        toast.success("OTP for verification sent successfully");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.isLoginOtpSent = false;
        toast.error(action.payload.message);
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
        state.loggedInUserData = action?.payload;
        state.isUserLoggedIn = true;
        toast.success("Logged In successfully");
      })
      .addCase(verifyLoginOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.loggedInUserData = {};
        state.isUserLoggedIn = false;
        toast.error(action?.payload?.response?.data?.message || "Error!");
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetLoginState, clearReduxStoreData } = authSlice.actions;
