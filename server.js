const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = 4000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});
