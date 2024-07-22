// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

export const servicePlanAction = createAsyncThunk(
  "servicePlan",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        "/servicePlan",
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
