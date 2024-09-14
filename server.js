const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/:slug', (req, res) => {
    const slug = req.params.slug;
    res.send(`Uh-oh! Can't find ${slug}`);
});

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'welcome.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
