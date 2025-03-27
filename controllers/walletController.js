const fs = require("fs");
const path = require("path");

const walletsFilePath = path.join(__dirname,"../data/wallets.json");

const readWallets = () =>{
    const data = fs.readFileSync(walletsFilePath);
    return JSON.parse(data)
}

exports.getAllWallets = (req,res)=>{
    const wallets = readWallets();
    res.json(wallets);
}