const express = require("express");
const {getAllWallets} = require("../controllers/walletController");

const router = express.Router();

router.get("/",getAllWallets);

module.exports = router;