require('dotenv').config()
const {conn} = require('./DB_connection')
const app = require('./app');
const PORT = 3001;


app.listen(PORT, () => {
   conn.sync({force: true})
   console.log('Server raised in port: ' + PORT);
});