const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./db.js');
const itemRoute = require('./item.route');

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Database is connected') },
    (err) => { console.log('Can not connect to the database' + err) },
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/items', itemRoute);

app.listen(PORT, () => {
    console.log('Server is running on Port:', PORT);
});
