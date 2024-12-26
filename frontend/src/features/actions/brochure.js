import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/Axios/axiosInterceptor";


export const addTemplate = createAsyncThunk(
  "addTemplate",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/brochure`, payload, {
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

export const getAllTemplates = createAsyncThunk("getAllTemplates",    
  async (payload, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/brochure`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

