require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Home route - Secret: ${process.env.SECRET}`);
})

app.get('/json', (req, res) => {
    res.status(200).json({secret: process.env.SECRET});
})

const port = process.env.PORT || 3000;

app.listen(port, console.log(`App is listening on port: ${port}...`))