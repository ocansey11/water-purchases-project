const { run } = require("./db");
const express = require("express");
const app = express();

const router = express.Router();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

run();

module.exports = {
  router,
  app,
};
