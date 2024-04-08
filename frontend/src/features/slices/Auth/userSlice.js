// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login, verifyLoginOtp } from "../../actions/Auth/authActions";
import { toast } from "sonner";
import { createUser } from "../../actions/Auth/userActions";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isUserLoading: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state, action) => {},
    clearReduxStoreData: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      // createUser lifecycle actions
      .addCase(createUser.pending, (state, action) => {
        state.isUserLoading = true;
        state.errorMessage = "";
        state.isLoginOtpSent = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = "";
        state.isLoginOtpSent = true;
        toast.success("User Created Successfully");
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isUserLoading = false;
        state.errorMessage = action?.payload;
        toast.error(action.payload.message);
      });
  },
});

export const userReducer = userSlice.reducer;
export const { resetUserState } = userSlice.actions;
