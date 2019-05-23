require('dotenv').config();
const express = require('express');


const app = express();
const port = process.env.PORT || 8080;

const root = require('path').join(__dirname, 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
});

app.listen(port);
