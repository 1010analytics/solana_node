const { PublicKey } = require("@solana/web3.js");
const { getTokenBalances } = require("../services/blockchain");

async function getTokenBalancesForWallet(req, res) {
  const { walletAddress } = req.params;

  if (!walletAddress) {
    return res.status(400).json({ error: "Wallet address is required" });
  }

  console.log("Attempting to create PublicKey with address:", walletAddress);

  try {
    const publicKey = new PublicKey(walletAddress);
    console.log("PublicKey created:", publicKey.toString());

    const balances = await getTokenBalances(walletAddress);
    res.json(balances);
  } catch (error) {
    console.error("Error creating PublicKey or retrieving balances:", error);
    res
      .status(500)
      .send("Error retrieving wallet information or invalid wallet address");
  }
}

module.exports = {
  getTokenBalancesForWallet,
};
