const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017/water-users";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (e) {
    // Ensures that the client ccatches/error
    console.log(e);
  }
}

async function addUser(username, email, hashedPassword) {
  try {
    const usersDb = client.db("water-users");
    const usersCollection = usersDb.collection("users");
    //learn queries
    const newUser = {
      username,
      email,
      hashedPassword,
    };

    const result = await usersCollection.insertOne(newUser);

    // Connection management is handled outside this function
  } catch (error) {
    console.error("Error adding user:", error);
    // You can choose to handle errors here or let them propagate to the caller
    throw error;
  }
}

module.exports = {
  run,
  addUser,
};
