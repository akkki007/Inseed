const { MongoClient } = require("mongodb");

const username = document.querySelector("#username");
const password = document.querySelector("#password");

const uri =
  "mongodb+srv://rohanwani10032006:rohan2006@inseed.tp8jrqt.mongodb.net/v";

const dbName = "loginInseed";
const collectionName = "loginInseed";

// Function to connect to MongoDB Atlas and insert data
async function run() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  let query = { name: "Raj Malhotra " };
  await collection.insertOne(query);

  await client.close();
}

run();
