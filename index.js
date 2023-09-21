const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        // Connect to MongoDB
        await client.connect();

        // Create or switch to the "helloDB" database
        const db = client.db("helloDB");

        // Insert a new document into the "world" collection
        const result = await db.collection("world").insertOne({
            greeting: "Hello, World!"
        });
        console.log(`New document inserted with the following id: ${result.insertedId}`);

        // Read the document back
        const document = await db.collection("world").findOne({ _id: result.insertedId });
        console.log(document);

    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
