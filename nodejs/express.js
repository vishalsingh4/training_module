var express = require('express');
var cors = require('cors');
const path = require('path');
var app = express();
var PORT = process.env.PORT || 5000;
var corsConfig = {
    origin: 'http://localhost:5000'
}

app.use(cors(corsConfig)); // enable CORS

app.use(express.json()); // extract body from post request

app.use(express.urlencoded({extended: false})); // x-www-form-urlencoded

// static file

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'home.html'))
// }); // PROBLEM IS WE HAVE TO CREATE DIFFERENT ROUTE FOR DIFFERENT PAGES

// app.use(express.static(path.join(__dirname, 'public')))

// middlewares
// const logger = (req, res, next) => {
    // console.log(req.params, 'req Params', req.protocol, req.hostname, req.originalUrl, req.query, moment().format());
    // req.params.id - is a string
//     console.log('middleware logger')
//     next();
// };

// app.use(logger);



// const jsonData = [
//     {
//       id: 1,
//       name: "Vishal Singh",
//       age: 27,
//     },
//     {
//       id: 2,
//       name: "Test User",
//       age: 28,
//     },
// ];
// REST APIS
// app.get('/api', (req, res) => {
//     res.json(jsonData)
// });


// ROUTERS
app.use('/api', require('./api_routes'));

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
})