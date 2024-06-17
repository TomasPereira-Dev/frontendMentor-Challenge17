import express from "express";
import cors from "cors";
import catalogRouter from "./routes/catalogRouter.js";
import createPreferenceRouter from "./routes/createPreferenceRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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