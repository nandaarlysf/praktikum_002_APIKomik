const express = require('express');
const app = express();
const routes = require('./routes');
const connectDatabase = require('./db');
require('dotenv').config();

app.use(express.json());

// Main Routes
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('API Komik is running!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDatabase();
});

 


