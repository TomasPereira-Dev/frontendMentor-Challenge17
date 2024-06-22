import { Router } from "express";
import data from "../data.json";

const catalogRouter = Router();

catalogRouter.get("/", (req, res) => {
    res.json(data)
});

export { catalogRouter }