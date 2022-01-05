const mongoose = require("mongoose")

async function openDBConnection(uri, options) {
    return mongoose.connect(uri, options);
}

module.exports = openDBConnection

// const { MongoClient } = require('mongodb');

// const uri = process.env.MONGO_URI

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// module.export = client