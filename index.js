const { run } = require("./db");
const express = require("express");
const app = express();
const signUpRouter = require("./routes/signup");

app.use(express.static("public"));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

run();

//Myroutes
app.use("/signup", signUpRouter);
// app.get("/dashboard", dashboardRouter);

module.exports = {
  app,
};
