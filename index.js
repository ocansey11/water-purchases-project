const { run, uri, client } = require("./db");
//Express
const express = require("express");
const app = express();

//middleware
const router = express.Router();
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

run();

//
module.exports = {
  router,
  app,
};
