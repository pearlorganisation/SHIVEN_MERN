import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/Axios/axiosInterceptor";


export const createOrUpdateConsultantProfile = createAsyncThunk(
  "createOrUpdateConsultantProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/consultantProfile`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getParticularConsultantProfile = createAsyncThunk("getParticularConsultantProfile",    
  async (id, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/consultantProfile/${id}`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

