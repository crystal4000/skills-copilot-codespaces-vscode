// Create web server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the public directory
app.use(express.static('public'));

// Endpoint to get comments
app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading comments file.');
            return;
        }
        res.json(JSON.parse(data));
    });
});