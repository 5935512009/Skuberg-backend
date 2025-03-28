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


exports.createTransaction = (req, res) => {
    const transactionsFilePath = path.join(__dirname, "../data/transactions.json");
    const walletsFilePath = path.join(__dirname, "../data/wallets.json");
    const cryptosFilePath = path.join(__dirname, "../data/crypto.json");

    const transactions = readTransactions();
    const wallets = JSON.parse(fs.readFileSync(walletsFilePath, "utf8"));
    const cryptos = JSON.parse(fs.readFileSync(cryptosFilePath, "utf8"));

    const { user_id, wallet_id, crypto_id, type, amount } = req.body;

    // ตรวจสอบว่า Wallet และ Crypto มีอยู่จริงหรือไม่
    const wallet = wallets.find(w => w.wallet_id === wallet_id && w.user_id === user_id);
    const crypto = cryptos.find(c => c.crypto_id === crypto_id);

    if (!wallet || !crypto) {
        return res.status(400).json({ error: "Invalid wallet or crypto" });
    }

    // คำนวณราคาซื้อขาย
    const price_per_coin = crypto.price;
    const total_price = price_per_coin * amount;

    if (type === "BUY") {
        if (wallet.balance < total_price) {
            return res.status(400).json({ error: "Insufficient balance" });
        }
        wallet.balance -= total_price;
    } else if (type === "SELL") {
        wallet.balance += total_price;
    } else {
        return res.status(400).json({ error: "Invalid transaction type" });
    }


    const newTransaction = {
        transaction_id: transactions.length + 1,
        user_id,
        wallet_id,
        crypto_id,
        type,
        amount,
        price_per_coin,
        total_price,
        date: new Date().toISOString()
    };

    transactions.push(newTransaction);

    // ✅ บันทึกข้อมูลลงไฟล์
    fs.writeFileSync(transactionsFilePath, JSON.stringify(transactions, null, 2));
    fs.writeFileSync(walletsFilePath, JSON.stringify(wallets, null, 2));

    res.status(201).json(newTransaction);
};
