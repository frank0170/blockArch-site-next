const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(
  "mongodb+srv://tested:Eo7qB3kpRQ46qhEK@cluster0.b5xnt2y.mongodb.net/blockArchErp?retryWrites=true&w=majority"
);

const clientPromise = mongoClient.connect();

exports.handler = async (event) => {
  try {
    const database = (await clientPromise).db("BlockArchShop");
    const collection = database.collection("SERVER");
    const results = await collection.find({}).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
