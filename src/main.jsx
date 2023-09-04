import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './i18/i18n.js'
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
        <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
