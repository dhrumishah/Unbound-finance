import React from "react";
import "./App.css";
import Connect from "./components/Connect";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <WagmiConfig client={client}>
      <Connect />
    </WagmiConfig>
  );
}

export default App;
