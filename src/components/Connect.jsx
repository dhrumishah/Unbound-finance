import React from "react";
import "/src/App.css";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useBalance,
  useNetwork,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Connect = () => {
  const { isConnected, address } = useAccount();

  const { data } = useBalance({
    addressOrName: address,
    // chainId: 5,
  });
  // console.log(data?.formatted);
  const { chain, chains } = useNetwork();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div className="connect-wallet">
        Address: {address}
        <p className="text-red-800">
          Balance: {data?.formatted} {data?.symbol}
        </p>
        {chain && (
          <div className="connect-chain">Connected to: {chain.name}</div>
        )}
        {chains && (
          <div>
            Available chains: {chains.map((chain) => chain.name + ", ")}
          </div>
        )}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  return (
    <button className="connect-wallet" onClick={() => connect()}>
      Connect Wallet
    </button>
  );
};
export default Connect;
