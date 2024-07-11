const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  mintAddress: { type: String, required: true },
});

module.exports = mongoose.model("Token", TokenSchema);
