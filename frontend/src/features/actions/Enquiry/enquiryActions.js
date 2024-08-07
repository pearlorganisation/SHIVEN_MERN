// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

export const enquiryMail = createAsyncThunk(
  "enquiry/enquiryMail",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post();

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
