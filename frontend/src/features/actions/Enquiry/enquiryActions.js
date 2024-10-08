// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

export const enquiryMail = createAsyncThunk(
  "enquiry/motor-insurance/bike-car",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post();

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
