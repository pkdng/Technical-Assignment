// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://online_course:<password>@nodejs-cluster.5339d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const dotenv = require("dotenv")
dotenv.config()

const express = require("express")

const routes = require("./routes")
const openDBConnection = require("./helpers/db")

const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI

async function main() {
  try{
      await openDBConnection(uri)

      const app = express()

      app.use(express.json())
      app.use(routes)

      app.listen(port, () => {
          console.log("server is listening on port", port)
      })
      
  }catch(err) {
      console.log(error)
  }
}

main()