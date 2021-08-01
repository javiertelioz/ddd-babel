'use strict';

const http = require('http');
const app = require('./src/app');

const server = http.createServer(app);

const { APP_NAME, APP_PORT, APP_HOST, NODE_ENV } = process.env;
const port = APP_PORT || 4000;
const host = APP_HOST || 'localhost';

server.listen(port, () => {
  console.log(`Run Environment: ${NODE_ENV}`);
  console.log(`Launch Application: ${APP_NAME}\n`);
  console.log(`🌎 Web Server: http://${host}:${port}\n`);
});
