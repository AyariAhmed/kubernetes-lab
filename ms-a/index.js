const express = require('express');
const app = express();
const axios = require('axios')
const port = 3000;

const msbHost = process.env.MSB_HOST ?? 'localhost'
const msbPort = +process.env.MSB_PORT ?? 3000

console.log("msbHost", msbHost, "msbPort", msbPort)

app.get('/', (req, res) => {
  res.send('Hello World from microservice A!');
});

app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

app.get('/ms-b', (req, res) => {
  axios.get(`http://${msbHost}:${msbPort}/`)
    .then((response) => res.send(response.data))
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
