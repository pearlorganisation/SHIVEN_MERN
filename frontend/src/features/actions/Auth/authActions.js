// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

// login -- action to call the login api
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/login", { payload });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// verifyLoginOtp -- action to call the login api
export const verifyLoginOtp = createAsyncThunk(
  "auth/verifyLoginOtp",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/login/verify", { payload });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// logout -- action to call the logout api
export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/logout");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
