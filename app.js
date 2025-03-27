const express = require("express");
const app = express();

//Routes
app.get('/test',async(requestAnimationFrame,res)=>{
    res.json("test hello world");
});


const PORT = 4001;
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})