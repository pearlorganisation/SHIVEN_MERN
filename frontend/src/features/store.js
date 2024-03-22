// ------------------------------------------------Imports-----------------------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer } from "redux-persist";

// ------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------

const persistConfig = {
  key: "Shiven",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (error) => {
        console.log("Redux Persist Encryption Failed: ", err);
      },
    }),
  ],
};

const reducers = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === "clearReduxStoreData") {
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools:
    import.meta.env.REACT_APP_WORKING_ENV === "development" ? true : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
