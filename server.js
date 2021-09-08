'use strict';

const express = require('express');

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log('Server started: https://localhost:${PORT}');

});