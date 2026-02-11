const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Manually parse .env file
try {
    const envPath = path.resolve(process.cwd(), '.env');
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        if (!line || line.startsWith('#')) return;
        const parts = line.split('=');
        const key = parts.shift();
        const value = parts.join('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
} catch (e) {
    console.log("Could not read .env file, assuming env vars are set externally.");
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("Please define the MONGODB_URI environment variable inside .env");
    process.exit(1);
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

console.log("Testing DB connection...");
console.log("URI found:", !!MONGODB_URI);

dbConnect()
    .then(() => {
        console.log("SUCCESS: Connected to MongoDB");
        process.exit(0);
    })
    .catch((err) => {
        console.error("ERROR: Could not connect to MongoDB");
        console.error(err);
        process.exit(1);
    });
