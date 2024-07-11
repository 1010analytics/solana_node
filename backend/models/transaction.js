const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true },
  transactionId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  token: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
