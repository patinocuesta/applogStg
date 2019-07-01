const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const moment = require('moment');
const querystring = require('querystring');
const db = require('./app_api/db');
const createApi = require('./app_api/api');
const routes = require('./app_server/routes/index');

const PORT = process.env.PORT || 8080;
const DOMAIN = process.env.DOMAIN || 'http://localhost';

async function createServer() {
  const app = express();
  // view engine setup
  app.set('views', path.join(__dirname, 'app_server', 'views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.join(__dirname, 'public')));
  // parse application/json
  app.use(bodyParser.json());
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  const httpServer = http.Server(app);
  const io = socketIo(httpServer);

  try {
    await db.connect(io);
  } catch (error) {
    console.error(error.message);
    console.error('Closing server');
    process.exit(1);
  }

  app.use('/', routes);
  app.use('/api', createApi({ Models: db.Models }));

  httpServer.listen(PORT, () => {
    console.log(`Server ready at ${DOMAIN}:${PORT}/`);
  });
}

createServer();
