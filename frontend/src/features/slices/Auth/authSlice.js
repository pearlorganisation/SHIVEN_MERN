// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../actions/Auth/authActions";
import { toast } from "sonner";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isLoginLoading: false,
  isUserLoggedIn: false,
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
  },
  extraReducers: (builder) => {
    builder
      // login lifecycle actions
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
        state.loggedInUserData = {};
        state.isUserLoggedIn = false;
        state.isLoginOtpSent = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.loggedInUserData = action?.payload;
        state.isUserLoggedIn = true;
        state.isLoginOtpSent = true;
        toast.success("OTP for verification sent successfully");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.loggedInUserData = {};
        state.isUserLoggedIn = false;
        state.isLoginOtpSent = false;
        toast.error(action.payload.message);
      });
  },
});

export const authReducer = authSlice.reducer;
export const { resetLoginState } = authSlice.actions;
