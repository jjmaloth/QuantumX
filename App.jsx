
import React, { useEffect, useState } from "react";
import { WormholeConnect } from "@wormhole-foundation/wormhole-connect";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ethers } from "ethers";

export default function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      if (!isConnected || !address) return;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(address);
      setBalance(ethers.utils.formatEther(balance));
    };
    getBalance();
  }, [isConnected, address]);

  return (
    <div className="min-h-screen p-6 space-y-6">
      <header>
        <h1 className="text-4xl font-bold">QuantumX DApp</h1>
        <p className="text-lg mt-2">Bridging & Wallets on Multichain</p>
      </header>

      <div>
        {isConnected ? (
          <div>
            <p className="mb-2">Connected Wallet: {address}</p>
            <p className="mb-2">Balance: Ξ {balance}</p>
            <button onClick={() => disconnect()} className="bg-red-500 px-4 py-2 rounded-lg">Disconnect</button>
          </div>
        ) : (
          <button onClick={() => connect()} className="bg-blue-600 px-4 py-2 rounded-lg">Connect Wallet</button>
        )}
      </div>

      <div className="mt-8 bg-gray-800 p-4 rounded-2xl">
        <WormholeConnect
          config={{
            env: "mainnet",
            defaultSourceChain: "ethereum",
            defaultTargetChain: "solana"
          }}
        />
      </div>
    </div>
  );
}
