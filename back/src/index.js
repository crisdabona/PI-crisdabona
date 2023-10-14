// const http = require('http')
// const char = require('./controllers/getCharById')


// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')

//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').pop()
//         char(res, id)
//     }



// }).listen(3000, '127.0.0.1')
const app = require('./app');
const PORT = 3001;


app.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});