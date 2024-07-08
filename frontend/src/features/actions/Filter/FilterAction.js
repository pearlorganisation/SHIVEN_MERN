// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

export const filterAction = createAsyncThunk(
  "enquiry/enquiryMail",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(
        "/enquiry",
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
