const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname,"../data/user.json")

const readUsers = () =>{
    const data =fs.readFileSync(userFilePath);
    return JSON.parse(data);
}

exports.getAllUsers = (req,res)=>{
    const users = readUsers();
    res.json(users);
}