//const http=require('http');

const express = require('express');
const bodyParser=require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // it will only used to send a form 


app.use('/add-product', (req, res, next) => { //why before because it doesn't have next if we don't have next then it doesn't go to next function/middleware
    res.send(`<form action="/product" method="POST">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username">
                <label for="size">Size: </label>
                <input type="number" name="size" id="size">
                <button type="submit">Add Product</button>
                </form>`);//send allows us to attach a body which of type any
    
})

app.post('/product', (req, res, next) => {
    //console.log('Hello!');
    console.log(req.body);
    res.redirect('/');

})



app.use('/', (req, res, next) => {
    res.send(`<h1>Hello from express!</h1>`);//send allows us to attach a body which of type any
    
})

// const server=http.createServer(app);

// server.listen(3000);

app.listen(3000);