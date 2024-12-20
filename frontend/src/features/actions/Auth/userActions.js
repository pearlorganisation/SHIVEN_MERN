// ---------------------------------------Imports----------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";
// --------------------------------------------------------------------------------------------------------

// createUser -- action to call the createUser api
export const createUser = createAsyncThunk(
  "auth/user/createUser",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await instance.post("/auth/user", { payload });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// updateUser -- action to call the updateUser api
export const updateUser = createAsyncThunk(
  "auth/user/updateUser",
  async ({ payload, userId }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/auth/user/${userId}`, {
        payload,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// getUsers -- action to call the getUsers api
export const getUsers = createAsyncThunk(
  "auth/user/getUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(payload ? `/auth/user${payload}` :`/auth/user`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


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