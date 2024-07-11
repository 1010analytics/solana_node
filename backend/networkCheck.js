const solanaWeb3 = require("@solana/web3.js");

async function checkNetwork() {
  const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl("devnet"),
    "confirmed"
  );

  try {
    const blockhash = await connection.getRecentBlockhash();
    console.log("Current blockhash:", blockhash.blockhash);
  } catch (error) {
    console.error("Failed to connect to the Solana network:", error);
  }
}

checkNetwork();
