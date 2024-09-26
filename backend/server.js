require('dotenv').config();

const express = require('express');
const app = express();
const mongoose=require('mongoose')
const path = require('path');

const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'templates', 'welcome.html'));
});
mongoose.connect(process.env.DB_URL)
const userSchema=new mongoose.Schema({
    name:String,
    age: Number
})
const userModel=mongoose.model("emp",userSchema)
const emp1=new userModel({
    name:"abc",
    age:23
})
emp1.save()
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
