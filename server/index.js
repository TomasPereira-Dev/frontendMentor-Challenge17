import express from "express";
import cors from "cors";
import pkg, { PaymentMethod } from "mercadopago";

const { MercadoPagoConfig, Preference } = pkg;

const client = new MercadoPagoConfig({
    accessToken: "APP_USR-3877524555477418-040120-96364adfa59dc939fc9bca3341e883fb-581759247",
});

const app = express();
const port = process.env.PORT|| 3000;

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
            ],
            back_urls: {
                success: "https://frontend-mentor-challenge17-client.vercel.app/",
                failure: "https://frontend-mentor-challenge17-client.vercel.app/",
                pending: "https://frontend-mentor-challenge17-client.vercel.app/"
            },
            auto_return: "approved"  
        }
        const preference = new Preference(client);
        const result = await preference.create({ body });
    
        res.json({
            id: result.id
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            error: "algo anda mal con la preferencia"
        })
    } 
})

app.listen(port, () => {
    console.log(`el server esta funcionando en el puerto ${port}`)
})