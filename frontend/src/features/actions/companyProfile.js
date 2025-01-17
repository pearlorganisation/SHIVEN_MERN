import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/Axios/axiosInterceptor";


export const createOrUpdateCompanyProfile = createAsyncThunk(
  "createOrUpdateCompanyProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/companyProfile`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getParticularCompanyProfile = createAsyncThunk("getParticularCompanyProfile",    
  async (id, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/companyProfile/${id}`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

