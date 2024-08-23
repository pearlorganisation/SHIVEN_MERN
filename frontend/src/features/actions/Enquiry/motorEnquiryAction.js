import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

export const motorEnquiry = createAsyncThunk(
  "enquiry/enquiryMail",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(
        "http://localhost:8000/api/v1/enquiry/motor-insurance/bike-car"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
