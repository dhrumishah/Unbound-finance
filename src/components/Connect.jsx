import React from "react";
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
      <div>
        Connected to {address}
        <p>
          Balance: {data?.formatted} {data?.symbol}
        </p>
        {chain && <div>Connected to {chain.name}</div>}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
};
export default Connect;
