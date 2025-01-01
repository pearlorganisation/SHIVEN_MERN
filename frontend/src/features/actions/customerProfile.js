import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/Axios/axiosInterceptor";


export const addCustomerProfile = createAsyncThunk(
  "addCustomerProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/customerProfile`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getParticularCustomerProfile = createAsyncThunk("getParticularCustomerProfile",    
  async (id, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/customerProfile/${id}`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);
export const deleteCustomerProfile = createAsyncThunk("deleteCustomerProfile",    
  async (id, { rejectWithValue }) => {
  try {
    const response = await instance.delete(`/customerProfile/${id}`);
    return response;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

