import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { App } from "./components/app";
import { ApplicationProvider } from "./context/ApplicationContext";
import reportWebVitals from "./reportWebVitals";
import { config } from "./config";
import { createWeb3Modal } from "@web3modal/wagmi/react";

import { WagmiProvider } from "wagmi";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const projectId = "4eb352e58e206ddcfa9ab440659f4b73";

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <ApplicationProvider>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ApplicationProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

reportWebVitals();
