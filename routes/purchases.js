const { router, app } = require("../index");

// MiddleWares for Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/purchases", router);
//1. hook my MongoDB
//2. for each crud, write proper syntax for execution.
//GET will be db.collection.find()
//POST will be db.collection.insertMany() || db.collection.insertOne()
// PUT will be db.collection.updateOne || db.collection.updateMany
//DELTE will be db.collection.deleteOne || db.collection.deleteMany

// GET
router.get("/purchases", (req, res) => {
  // Logic to fetch water purchase data
  // Send the data back as a response

  res.json({ msg: "test passed sucessfully" });
});

//POST
router.post("/", (req, res) => {
  // Logic to add  water purchase data
  // Send a response indicating success
});

//PUT
router.put("/", (req, res) => {
  // Logic to update submitted water purchase data
  // Send a response indicating success
});

//DELETE
router.delete("/", (req, res) => {
  // Logic to delete submitted water purchase data
  // Send a response indicating success
});

//Filtering by Package
router.get("/", (req, res) => {
  // Logic to fetch water purchase data
  // Send the data back as a response
});

//Filtering by Date (Month/Week)
router.get("/", (req, res) => {
  // Logic to fetch water purchase data
  // Send the data back as a response
});
