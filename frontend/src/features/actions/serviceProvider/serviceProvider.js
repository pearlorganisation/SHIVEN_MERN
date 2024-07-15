// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

export const serviceProviderAction = createAsyncThunk(
  "serviceProvider",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        "/serviceProvider",
        { payload },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
