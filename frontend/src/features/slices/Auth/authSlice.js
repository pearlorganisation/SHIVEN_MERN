// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login, logout, verifyLoginOtp } from "../../actions/Auth/authActions";
import { toast } from "sonner";
import { persistor } from "../../../main";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isLoginLoading: false,
  isUserLoggedIn: false,
  loggedInUserData: {},
  errorMessage: "",
  isLoginOtpSent: false,
  isLoading:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetIsLoading :(state)=>{
state.isLoading = false
    },
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
        state.loggedInUserData = action?.payload;
        state.isLoginOtpSent = true;
        toast.success("OTP for verification sent successfully");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.isLoginOtpSent = false;
        toast.error(action.payload.response.data.message);
        console.log(state.errorMessage)
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
      })
      // logout lifecycle actions
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
        // persistor.purge();
        toast.success("Logout successfully");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action?.payload?.response?.data?.message || "Error!");
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetLoginState, clearReduxStoreData,resetIsLoading } = authSlice.actions;
