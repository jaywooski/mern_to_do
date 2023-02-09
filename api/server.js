const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ATLAS_DB, {
    useNewUrlParser: true,
    useunifiedTopology: true
})
    .then(() => console.log('Connected to database!'))
    .catch(console.error);


app.listen(3001, ()=> {
    console.log('hosted on port 3001!!');
})