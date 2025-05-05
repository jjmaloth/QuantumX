import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./context"; // Import ContextProvider
import "./index.css"; // Import global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider cookies={null}> {/* Pass cookies if needed */}
      <App />
    </ContextProvider>
  </React.StrictMode>
);
