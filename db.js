const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("water-purchases");
    const purchases = database.collection("purchases");

    //learn queries
    console.log(purchases);
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
