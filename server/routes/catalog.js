import { Router } from "express";
import cors from "cors";
import data from "./data.json" with { type: "json" };

const catalogRouter = Router();

catalogRouter.get("/", cors(),(req, res) => {
    res.json(data);
});

export { catalogRouter }