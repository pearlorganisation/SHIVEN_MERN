// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

// getInsurances -- action to call the getInsurances api
export const getInsurances = createAsyncThunk(
  "insurance/getInsurances",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get("/insurance");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// createInsurance -- action to call the createInsurance api
export const createInsurance = createAsyncThunk(
  "insurance/createInsurance",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("/insurance", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
