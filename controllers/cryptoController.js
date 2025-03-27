const fs = require("fs");
const path = require("path");

const cryptoFilePath = path.join(__dirname,"../data/crypto.json");

const readCryptos = () => {
    const data = fs.readFileSync(cryptoFilePath);
    return JSON.parse(data);
}

exports.getAllCryptos = (req,res) =>{
    const cryptos = readCryptos()
    res.json(cryptos);
}