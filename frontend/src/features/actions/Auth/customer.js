import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";

export const createCustomer = createAsyncThunk(
    "createCustomer",
    async (payload, { rejectWithValue }) => {
      try {
        const response = await instance.post(`/customer`,{payload});
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const getAllCustomers = createAsyncThunk(
    "getAllCustomers",
    async (_, { rejectWithValue }) => {
      try {
        const {data} = await instance.get(`/customer`);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export const getParticularConsultantCustomer = createAsyncThunk(
    "getParticularConsultantCustomer",
    async (id, { rejectWithValue }) => {
      try {
        const {data} = await instance.get(`/customer/${id}`);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );