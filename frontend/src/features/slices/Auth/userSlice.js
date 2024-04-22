// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login, verifyLoginOtp } from "../../actions/Auth/authActions";
import { toast } from "sonner";
import { createUser, getUsers } from "../../actions/Auth/userActions";
//------------------------------------------------------------------------------------------------------------

const initialState = {
  isUserLoading: false,
  errorMessage: "",
  usersData: {},
  isUserCreated: false,
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
      });
  },
});

export const userReducer = userSlice.reducer;
export const { resetUserState } = userSlice.actions;
