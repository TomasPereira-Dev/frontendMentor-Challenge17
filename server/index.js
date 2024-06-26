import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import "dotenv/config";
import { catalogRouter } from "./routes/catalogRouter.js";
import { createPreferenceRouter } from "./routes/createPreferenceRouter.js";
import { connectToDatabase } from "./database/connectToDatabase.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

export const db = connectToDatabase();

app.use("/catalog", catalogRouter);
app.use("/create_preference", createPreferenceRouter);

app.disable("x-powered-by");



//cosas generales
app.use((req, res) => {
    res.status(404).send('<h1>404 not found</h1>');
});

app.listen(port, () => {
    console.log(`el server esta funcionando en el puerto ${port}`);
});

export default app;