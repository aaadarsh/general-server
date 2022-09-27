var express = require ('express');
// var mongoose = require ('mongoose');
var bodyparser = require ('body-Parser');
var cors = require ('cors');
// var path = require('path');

var app = express();
// const route = require ('./route/routes');

//mongodb connection

// mongoose.connect("mongodb://localhost:27017/shoppinglist", { useNewUrlParser: true });

// mongoose.connection.on('connected', ()=>{
//     console.log('connected to mongoDb');
// });
// mongoose.connection.on('error', ()=>{
//     console.log(error);
// });

//home route
app.get('/', (req, res)=>{
    res.send('Welcome to the home page');
});

//integration
/*
app.use(express.static(path.join(__dirname + 'dist')));

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/shopping-list/index.html'));
    
});
*/

app.use(cors());
app.use(bodyparser.json());

// app.use('/api', route);  

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server started at port: ' + port);
})