require('dotenv').config();

const express = require('express');
const app = express();
const mongoose=require('mongoose')
const path = require('path');
const bodyParser=require('body-parser')
const cors=require('cors')
const port = process.env.PORT || 8080;
const AuthRouter=require('./Routes/AuthRouter')
require('./Models/db')
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth',AuthRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'templates', 'welcome.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
