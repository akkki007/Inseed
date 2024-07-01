const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const uri =
  "mongodb+srv://akshay:akshay2006@inseed.tp8jrqt.mongodb.net/?retryWrites=true&w=majority&appName=Inseed";

async function register(data) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await createListing(client, {
      name: `${data.name}`,
      email: `${data.email}`,
      password: `${data.password}`,
      address: `${data.address}`,
    });
  } catch (e) {
    console.error(e);
    throw new Error("Registration failed");
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

async function login(data) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const user = await compareListing(client, {
      email: `${data.email}`,
      password: `${data.password}`,
    });
    return user != null;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function createListing(client, newListing) {
  const result = await client
    .db("Users_registration")
    .collection("users")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function compareListing(client, findListing) {
  const result = await client
    .db("Users_registration")
    .collection("users")
    .findOne({ email: findListing.email, password: findListing.password });
  return result;
}

app.post("/registration", (req, res) => {
  register(req.body).catch(console.error);
  console.log(req.body);
  res.json({ message: "Registration successful" });
});

app.post("/login", async (req, res) => {
  const loginSuccess = await login(req.body).catch(console.error);
  console.log(req.body);
  if (loginSuccess) {
    res.json({ message: "Login successful" });
  } else {
    res
      .status(401)
      .json({ message: "Login failed. Incorrect username or password." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
