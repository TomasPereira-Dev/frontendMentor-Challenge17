import { Router } from "express";
import pkg from "mercadopago";

const { MercadoPagoConfig, Preference } = pkg;
const client = new MercadoPagoConfig({
    accessToken: process.env.MP_TOKEN,
});

const createPreferenceRouter = Router(); 

createPreferenceRouter.post("/", async (req, res) => {
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
        res.status(500).json({
            error: "algo anda mal con la preferencia"
        });
    } 
});

export { createPreferenceRouter } 