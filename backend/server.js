require('dotenv').config();

const express = require('express');
const app = express();
const mongoose=require('mongoose')
const path = require('path');

mongoose.connect(process.env.DB_URL)

const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'templates', 'welcome.html'));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
