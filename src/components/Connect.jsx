import React from "react";
import "/src/App.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useBalance, useNetwork } from "wagmi";

const Connect = () => {
  const { connector: activeConnector, isConnected, address } = useAccount();

  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
    chainId: 5,
  });
  console.log(data?.formatted);
  const { chain } = useNetwork();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div className="connect-wallet">
        Connected to {address}
        <p className="text-red-800">
          Balance: {data?.formatted} {data?.symbol}
        </p>
        {chain && <div>Connected to {chain.name}</div>}
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
