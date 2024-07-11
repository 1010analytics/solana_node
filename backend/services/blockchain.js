const solanaWeb3 = require("@solana/web3.js");

const connection = new solanaWeb3.Connection(
  solanaWeb3.clusterApiUrl("devnet"),
  "confirmed"
);

async function getTokenBalances(walletAddress) {
  console.log("Wallet Address being passed:", walletAddress);

  try {
    const publicKey = new solanaWeb3.PublicKey(walletAddress);
    console.log("Public Key Created:", publicKey.toString());
    let tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      { programId: new solanaWeb3.PublicKey(solanaWeb3.TOKEN_PROGRAM_ID) }
    );

    return tokenAccounts.value.map((account) => {
      const { mint, owner, tokenAmount } = account.account.data.parsed.info;
      return { mint, owner: owner.toBase58(), amount: tokenAmount.uiAmount };
    });
  } catch (error) {
    console.error("Error retrieving token balances:", error);
    throw new Error("Failed to retrieve token balances");
  }
}

module.exports = { getTokenBalances };
