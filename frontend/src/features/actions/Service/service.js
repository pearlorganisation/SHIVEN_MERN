import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";


export const updateService = createAsyncThunk(
  "updateService",
  async ({id,payload}, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/service/${id}`, payload, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getAllServices = createAsyncThunk("getService",    
  async (payload, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/service`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

