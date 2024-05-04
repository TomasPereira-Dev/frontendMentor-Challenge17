import express from "express";
import cors from "cors";
import pkg from "mercadopago";

const { MercadoPagoConfig, Preference } = pkg;

const client = new MercadoPagoConfig({
    accessToken: "TEST-3877524555477418-040120-4a5a8c25ef60e03d83b4657fb0dfa842-581759247",
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("FUNCA!");
});

app.post("/create_preference", async (req, res) => {
    try{
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS"
                }
            ]   
        }
        const preference = new Preference(client);
        const result = await preference.create({ body });
    
        res.json({
            id: result.id
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            error: "omar algo anda mal con la preferencia"
        })
    } 
})

app.listen(port, () => {
    console.log(`el server esta funcionando en el puerto ${port}`)
})