const express = require('express');
const http = require('http');

const routesMontad = require('./api/routes/montadRoutes.js')
const routesMotocic = require('./api/routes/motocicRoutes.js')

const app = express();

require('./database/indexDB.js')

app.set('url', 'http://localhost:');
app.set('porta', '3001');

app.use(express.json());

app.use(routesMontad);
app.use(routesMotocic);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nRodando na porta: ', app.get('url') + app.get('porta'));
})