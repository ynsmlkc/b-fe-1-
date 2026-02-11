// lib/mongodb.js
import { MongoClient, ServerApiVersion } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

let client
let clientPromise

if (process.env.NODE_ENV === "development") {
  // Geliştirme modunda bağlantıyı küresel (global) bir değişkende tutuyoruz
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // Production modunda yeni bir client oluşturup doğrudan bağlanıyoruz
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Next-auth MongoDB Adapter için clientPromise'ı dışa aktarıyoruz
export default clientPromise