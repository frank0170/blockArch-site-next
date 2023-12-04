const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(
  "mongodb+srv://tested:Eo7qB3kpRQ46qhEK@cluster0.b5xnt2y.mongodb.net/blockArchErp?retryWrites=true&w=majority"
);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const database = (await clientPromise).db("BlockArchShop");
    const collection = database.collection("PC_GAMING");
    const results = await collection.find({}).limit(10).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
