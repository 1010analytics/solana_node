const Transaction = require("../models/transaction");

exports.logTransaction = async (req, res) => {
  try {
    const { walletAddress, transactionId, amount, token } = req.body;
    const transaction = new Transaction({
      walletAddress,
      transactionId,
      amount,
      token,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};
