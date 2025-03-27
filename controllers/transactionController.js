const fs = require("fs");
const path = require("path");

const TransactionsFilePath = path.join(__dirname,'../data/transactions.json');

const readTransactions = () =>{
    const data = fs.readFileSync(TransactionsFilePath);
    return JSON.parse(data);
}

exports.getAllTransactions = (req,res) =>{
    const transactions = readTransactions();
    res.json(transactions);
}