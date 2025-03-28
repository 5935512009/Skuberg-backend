const express = require("express");
// const path = require("path");
const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");
const cryptoRoutes = require("./routes/cryptoRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const app = express();
app.use(express.json());


// // Middleware สำหรับเสิร์ฟไฟล์ static (เช่น CSS, รูปภาพ)
// app.use(express.static(path.join(__dirname, "views")));
// app.use(express.static(path.join(__dirname, "views/crypto_coin")));  // ต้องให้ path ตรงกับโฟลเดอร์จริง

// ทดสอบ API
app.get('/test', (req, res) => {
    res.json("test hello world");
});

app.use("/users", userRoutes);
app.use("/wallets",walletRoutes);
app.use("/cryptos",cryptoRoutes);
app.use("/transactions",transactionRoutes);

// // เสิร์ฟหน้า index.html
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "index.html"));
// });

// // เสิร์ฟหน้า crypto.html
// app.get("/crypto", (req, res) => {
//     res.sendFile(path.join(__dirname, "views/crypto_coin", "Crypto.html"));
// });

// Start server
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});
