import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../services/Axios/axiosInterceptor";


export const createServicePlan = createAsyncThunk(
  "createServicePlan",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/servicePlan`, payload, {
        withCredentials: true
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getAllServicePlans = createAsyncThunk("getServicePlan",    
  async (payload, { rejectWithValue }) => {
  try {
    const {data} = await instance.get(`/servicePlan`, {
      withCredentials: true,
    });
    return data;

  } catch (e) {
    return rejectWithValue(e);
  }
}
);

//   //updateServicePlan api
//   export const updateServicePlan = createAsyncThunk(
//     'updateServicePlan',
//     async ({id,payload}, { rejectWithValue }) => {
//       try {
//         const response = await instance.patch(`/servicePlan/${id}`, payload, {
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

// //deleteServicePlan api
// export const deleteServicePlan = createAsyncThunk(
//   'deleteServicePlan',
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await instance.delete(
//         `/servicePlan/${id}`,
        
//         { withCredentials: true }
//       );
//       return response;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
