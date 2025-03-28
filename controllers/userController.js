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


// create user file 
exports.createUser = (req,res) =>{
    const users = readUsers(); 
    const newUsers = {
        user_id:users.length + 1,
        username:req.body.username,
        password:req.body.password
    };
    users.push(newUsers);
    fs.writeFileSync(userFilePath, JSON.stringify(users,null,2));  // write in file and send "users" no replece.
    res.status(201).json(newUsers);    
}