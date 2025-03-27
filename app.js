const express = require("express");
const path = require("path")

const app = express();

//tes path
app.get('/test',async(req,res)=>{
    res.json("test hello world");
});

// path 
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT = 4001;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})