const express = require('express');
const morgan = require('morgan');


/*
* Initiations
*/
const app = express();

/*
* Middlewares
*/
app.use(morgan('dev'));

/*
* localhost:3000
*/
app.listen(3000, (err) => {
    if (err)
        throw err;
    else 
        console.log('Server has started!');
});

/*
* WebApp Default Route
*/
app.get('/', (req, res, next) => {
    res.status(200).send('<h1 align="center">This is the Home Route!</h1>');
});