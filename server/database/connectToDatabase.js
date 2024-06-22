import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const connectToDatabase = async () => {
    try{
        await client.connect();
        console.log("connectado a la base de datos")
        return client.db("audiophile");
    } catch(error) {
        console.error(error);
        throw error
    }
}