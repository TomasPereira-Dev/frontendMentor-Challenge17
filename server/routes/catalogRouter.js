import { Router, response } from "express";
import { db } from "../index.js";
import data from "../data.json" with { type: "json" };

const catalogRouter = Router();

catalogRouter.get("/", async (req, res) => {
    const collection =  (await db).collection("catalog").find({}).toArray();
    res.send(await collection);
});

export { catalogRouter }