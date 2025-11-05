// main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import ErrorBoundary from "./components/ErrorBoundary";
import UserTracker from "./UserTracker";

import { ClerkProvider } from "@clerk/clerk-react";

const persistor = persistStore(store);

// Vite: put this in .env as VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxx
const pk = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | "pk_live_Y2xlcmsubGVhcm5lc3QudGVjaCQ";
if (!pk) {
  // fail fast so you don't get "Missing required parameter: client_id"
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY in .env");
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={pk}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <UserTracker />
            <App />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
