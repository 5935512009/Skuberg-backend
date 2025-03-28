const express = require("express");
const {getAllTransactions,newTransactions} = require("../controllers/transactionController");

const router = express.Router();

router.get("/",getAllTransactions);
router.post("/",newTransactions);
module.exports = router;