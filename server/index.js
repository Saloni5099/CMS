const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./db');
const docRoute = require("./routes/docRoute");
const receptRoute = require("./routes/receptRoute");
dotenv.config();

const app = express();             // createdobject

app.use(cors());                   // coneect frontend backend
app.use(bodyParser.json({extended:true,limit:'32mb'}));              
app.use(bodyParser.urlencoded({limit:'32mb',extended:true}));

connectDB();

app.use("/api/docs",docRoute);
app.use("/api/recept",receptRoute);

const PORT = process.env.PORT || 3006;
app.listen(PORT,()=>console.log(`Running on Port ${PORT} `))