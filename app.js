const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set ('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));


app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.getPageNotFound);


app.listen(3000);