import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/Axios/axiosInterceptor";


export const addCustomisedForm = createAsyncThunk(
  "addCustomisedForm",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/customisedForm`, payload, {
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

export const getAllCustomisedForm = createAsyncThunk("getAllCustomisedForm",    
  async (payload, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/customisedForm`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

