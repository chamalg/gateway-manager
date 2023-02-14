const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require("express-validator");
const cors = require('cors');

const app = express();
require('dotenv').config();


const gatewayRoutes = require('./routes/gateway');

// mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE).then(
    () => { console.log('Database connected') },
    err => { console.log('Error connecting to the database.') }
);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors())


//route middleware
app.use('/api', gatewayRoutes);



const port = process.env.PORT || 6900;

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


module.exports = server