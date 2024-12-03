import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store.js";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Toaster } from "sonner";
import "./App.css";

// ------------------------------------------------------------------------------------------------------------
export let persistor = persistStore(store);
// ------------------------------------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="bg-[var(--main-background)]">
            <App />
          </div>
          <Toaster richColors position="top-center" />
        </BrowserRouter>
      </PersistGate>
    </Provider>

);
