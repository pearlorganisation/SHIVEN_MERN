// ------------------------------------------------Imports-----------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer } from "redux-persist";
import { authReducer } from "./slices/Auth/authSlice";
import { toast } from "sonner";

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

const persistConfig = {
  key: "Shiven",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REDUX_PERSIST_SECRET_KEY}`,
      onError: (error) => {
        console.log("Redux Persist Encryption Failed: ", err);
      },
    }),
  ],
};

const reducers = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/clearReduxStoreData") {
    state = undefined;
    localStorage.clear();
    sessionStorage.clear();
    toast.success("Logged Out Successfully");
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_WORKING_ENV === "development" ? true : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
