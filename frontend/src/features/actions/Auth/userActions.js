// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------


export const getConsultants = createAsyncThunk(
  "consultants/Fetch",
  async (payload, { rejectWithValue }) => {

    try {
      let response
      if(payload)
     {  response = await instance.get(`/consultant?${payload.key}=${payload.value}`);}
     else{
       response = await instance.get(`/consultant`);
     }

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const updateConsultantStatus = createAsyncThunk(
  "consultantStatus/update",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/consultant/verify/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getConsultantWithPopulated = createAsyncThunk(
  "getConsultantWithPopulated",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/consultant/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateConsultant = createAsyncThunk(
  "consultant/updateConsultant",
  async ({ payload, userId }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/consultant/${userId}`,payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateConsultantPlans = createAsyncThunk(
  "consultant/plans/id",
  async ({ payload, userId }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/consultant/plans/${userId}`,payload);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);