const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(
  "mongodb+srv://tested:Eo7qB3kpRQ46qhEK@cluster0.b5xnt2y.mongodb.net/?retryWrites=true&w=majority"
);

const clientPromise = mongoClient.connect();

exports.handler = async (event) => {
  try {
    const { modelName, collectionName } = event.queryStringParameters; // Extract model name from query parameters

    if (!modelName) {
      return {
        statusCode: 400,
        body: "Model name is missing in query parameters.",
      };
    }

    const database = (await clientPromise).db("BlockArchShop");
    const collection = database.collection(collectionName);

    // Query for documents with a specific model name
    const results = await collection.find({ model: modelName }).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
