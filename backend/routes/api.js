const express = require("express");
const router = express.Router();
const walletController = require("../controllers/walletController");
const transactionController = require("../controllers/transactionController");

router.get(
  "/wallet/:walletAddress/balances",
  walletController.getTokenBalancesForWallet
);
router.post("/transaction", transactionController.logTransaction);

module.exports = router;
