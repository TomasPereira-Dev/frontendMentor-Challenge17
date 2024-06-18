import { Router } from "express";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

const catalogRouter = Router();

catalogRouter.get("/catalog", async (req, res) => {
    let results = await db.collection("catalog").find({}).toArray();
    res.send(results);
});

export { catalogRouter }