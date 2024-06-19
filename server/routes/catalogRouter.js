import { Router } from "express";
import { db } from "../index.js";

const catalogRouter = Router();

catalogRouter.get("/", async (req, res) => {
    try{
        const coll =  db.collection("catalog");
        const response = await coll.find({}).toArray((err, docs) => {
            console.log(docs, err)
        });
        res.send(response)
    } catch (error){
        console.log(error)
    }
});

export { catalogRouter }