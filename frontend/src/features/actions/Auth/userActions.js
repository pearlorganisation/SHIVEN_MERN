// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

// createUser -- action to call the createUser api
export const createUser = createAsyncThunk(
  "auth/user/createUser",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/user", { payload });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// getUsers -- action to call the getUsers api
export const getUsers = createAsyncThunk(
  "auth/user/getUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get("/auth/user");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
