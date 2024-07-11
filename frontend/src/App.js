import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import WalletInfo from "./WalletInfo";

function App() {
  const wallet = useWallet();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Solana Wallet Dashboard</h1>
        <WalletMultiButton />
        {wallet.connected && (
          <section>
            <p>Wallet Address: {wallet.publicKey?.toBase58()}</p>
            <WalletInfo walletAddress={wallet.publicKey?.toBase58()} />
          </section>
        )}
      </header>
    </div>
  );
}

export default App;
