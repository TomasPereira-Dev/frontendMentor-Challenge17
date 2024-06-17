import { Router } from "express";
import cors from "cors";
import data from "./data.json" with { type: "json" };

const catalogRouter = Router();
catalogRouter.use(cors());

catalogRouter.get("/", (req, res) => {
    res.json(data);
    res.header("Access-Control-Allow-Origin", "*");
});

export { catalogRouter }