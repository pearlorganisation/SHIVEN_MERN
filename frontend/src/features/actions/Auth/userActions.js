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
