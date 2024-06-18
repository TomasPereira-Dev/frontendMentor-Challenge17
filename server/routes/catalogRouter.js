import { Router } from "express";

const catalogRouter = Router();

catalogRouter.get("/catalog", async (req, res) => {
    let collection = await db.collection("catalog");
    let results = await db.collection.find({}).toArray();

    res.send(results);
});

export { catalogRouter }