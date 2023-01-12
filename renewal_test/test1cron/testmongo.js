const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://resh:resh@cluster0.fcr60ip.mongodb.net/?retryWrites=true&w=majority";


console.log("here");
const client = new MongoClient(uri);

console.log("here too!");

async function run() {
  try {
    const database = client.db("forcron");
    const movies = database.collection("userrequests");

    
    const query = { };


    const cursor = movies.find(query);

    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
