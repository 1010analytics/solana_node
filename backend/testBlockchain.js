const solanaWeb3 = require("@solana/web3.js");

try {
  const publicKey = new solanaWeb3.PublicKey(
    "4C6FnnxvHtsiFEGWZ8r14ZZ4ySUGBgW2oggBPw2UztuV"
  );
  console.log("Public Key:", publicKey.toString());
} catch (error) {
  console.error("Error creating PublicKey:", error);
}
