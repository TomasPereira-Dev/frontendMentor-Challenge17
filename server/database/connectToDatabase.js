import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb+srv://tomaspereira2k:palermo1113@audiophile.onxgh7o.mongodb.net/?retryWrites=true&w=majority&appName=audiophile");


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