const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema({
  address: { type: String, required: true, unique: true },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Wallet", WalletSchema);
