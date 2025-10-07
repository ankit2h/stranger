import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import UserTracker from "./UserTracker.tsx";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <UserTracker />
        <App />
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
