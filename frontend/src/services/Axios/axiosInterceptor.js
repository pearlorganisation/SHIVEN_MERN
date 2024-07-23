// -----------------------------------------------Imports-------------------------------------------------------
import axios from "axios";
// -------------------------------------------------------------------------------------------------------------

const url =
  import.meta.env.VITE_WORKING_ENV === "development"
    ? `${import.meta.env.VITE_DEV_API_URL}/api/v1`
    : `${import.meta.env.VITE_PROD_API_URL}/api/v1`;

export const instance = axios.create({
  baseURL: `${url}`,
});

// request configuration
instance.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response configuration
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
