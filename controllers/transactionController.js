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

exports.createTransaction = (req,res) =>{
    const transactions = readTransactions();
    const wallets = JSON.parse(fs.readFileSync(__dirname,"../data/wallets.json"));
    const cryptos = JSON.parse(fs.readFileSync(__dirname,"../data/wallets.json"));
    
    const {user_id,wallet_id,crypto_id,type,amount} = req.body;
    
    // check ว่า wallet และ crypto มีค่าอยู่จริงใหม
    const wallet = wallets.find(w => w.wallet_id ===  wallet_id && w.user_id === user_id);
    const crypto = cryptos.find(crypto_id.crypto_id === crypto_id);

    if(!wallet || !crypto){
        return res.stauts(400).json({error:"Invaild wallet and crypto"})
    }

    // คำนวนราคาซื้อขาย
    const price_per_coin = crypto.price;
    const total_price = price_per_coin * amount; // ราคาที่เราจ่ายซื้อ

    if(type === "BUY" ){
        wallet.balance -= total_price;
    }else if(type === "SELL"){
        wallet.balance += total_price;
    }else{
        return res.stauts(400).json({error: "Invaild transaction type"});
    }

    const newTransactions = {
        transaction_id: length +1,
        user_id,
        wallet_id,
        type,
        amount,
        price_per_coin,
        total_price,
        date:new Date().toDateString()

    };
    transactions.push(newTransactions);
    fs.writeFileSync(TransactionsFilePath, JSON.stringify(transactions,null,2)); //create transaction details
    fs.writeFileSync(path.join(__dirname,"../data/wallets.json"), JSON.stringify(wallets,null,2)); //update wallets balance
    res.stauts(201).json(transactions);
};