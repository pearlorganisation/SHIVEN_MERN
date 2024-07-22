import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";


export const createServiceProvider = createAsyncThunk(
  "createServiceProvider",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/serviceProvider`, payload, {
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

export const getAllServiceProviders = createAsyncThunk("getServiceProvider",    
  async (payload, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/serviceProvider`);
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

//   //updateServiceProvider api
//   export const updateServiceProvider = createAsyncThunk(
//     'updateServiceProvider',
//     async ({id,payload}, { rejectWithValue }) => {
//       try {
//         const response = await instance.patch(`/serviceProvider/${id}`, payload, {
//           withCredentials: true,
//           headers: {
//             "Content-type": "multipart/form-data",
//           },
//         });
//         return response;
//       } catch (e) {
//         return rejectWithValue(e);
//       }
//     }
//   );

// //deleteServiceProvider api
// export const deleteServiceProvider = createAsyncThunk(
//   'deleteServiceProvider',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await instance.delete(
//         `/serviceProvider/${id}`,
        
//         { withCredentials: true }
//       );
//       return response;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
