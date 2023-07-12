const express = require('express');
const { environment, port } = require('./config');

const app = express();
let server;

app.get('/', (req, res) => {
  res.send('Api Rest Express');
});

app.get('/health-check', (req, res) => {
  res.send('Health check passed');
});

app.get('/bad-health', (req, res) => {
  res.status(500).send('Health check did not pass');
});

const startServer = async () => {
  server = app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server running in ${environment} on port ${port}...`);
  });
};

startServer();

module.exports = app;
