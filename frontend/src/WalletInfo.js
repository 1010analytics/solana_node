import React, { useState, useEffect } from "react";
import axios from "axios";

function WalletInfo({ walletAddress }) {
  const [walletInfo, setWalletInfo] = useState(null);

  useEffect(() => {
    if (walletAddress) {
      axios
        .get(`http://localhost:5000/api/wallet/${walletAddress}/balances`)
        .then((response) => {
          setWalletInfo(response.data);
        })
        .catch((error) => {
          console.error("Error fetching wallet data:", error);
          setWalletInfo(null);
        });
    }
  }, [walletAddress]);

  if (!walletInfo) return <p>Loading wallet info...</p>;

  return (
    <div>
      <h3>Wallet Address: {walletAddress}</h3>
      <p>Balance: {walletInfo.balance}</p>{" "}
    </div>
  );
}

export default WalletInfo;
