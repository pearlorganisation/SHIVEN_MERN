import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";


export const createService = createAsyncThunk(
  "createService",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/service`, payload, {
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

//   //updateService api
//   export const updateService = createAsyncThunk(
//     'updateService',
//     async ({id,payload}, { rejectWithValue }) => {
//       try {
//         const response = await instance.patch(`/service/${id}`, payload, {
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

// //deleteService api
// export const deleteService = createAsyncThunk(
//   'deleteService',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await instance.delete(
//         `/service/${id}`,
        
//         { withCredentials: true }
//       );
//       return response;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
