import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/Axios/axiosInterceptor";


export const addFilesAndFolders = createAsyncThunk(
  "addFilesAndFolders",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/filesAndFolders`, payload, {
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

export const renameFolder = createAsyncThunk(
  "renameFolder",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/filesAndFolders/rename`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const renameFile = createAsyncThunk(
  "renameFile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/filesAndFolders/renameFile`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const togglePrivacyFolder = createAsyncThunk(
  "togglePrivacyFolder",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/filesAndFolders/updatePrivacy`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getAllFilesAndFolders = createAsyncThunk("getAllFilesAndFolders",    
  async (id, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/filesAndFolders/${id}`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);
export const getAllPublicFilesAndFolders = createAsyncThunk("getAllPublicFilesAndFolders",    

  async (id, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/filesAndFolders/public/${id}`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

export const deleteFolder = createAsyncThunk(
  "deleteFolder",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/filesAndFolders/deleteFolder`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteFile = createAsyncThunk(
  "deleteFile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/filesAndFolders/deleteFile`, payload);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

