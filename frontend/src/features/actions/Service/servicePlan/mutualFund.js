import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../../services/Axios/axiosInterceptor";


export const createMutualFund = createAsyncThunk(
  "mututalFund/create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/service-plans/mutual-funds`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);