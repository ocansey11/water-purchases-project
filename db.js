const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

const db = client.db();
async function run() {
  try {
    const database = client.db("water-purchases");
    const purchases = database.collection("purchases");

    //learn queries
    const cursor = purchases.find({ Package: "Bottle" });

    console.log(cursor);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports = {
  run,
  uri,
  client,
};
