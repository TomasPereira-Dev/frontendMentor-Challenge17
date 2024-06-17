import { Router } from "express";
import cors from "cors"
import pkg from "mercadopago";

const { MercadoPagoConfig, Preference } = pkg;
const client = new MercadoPagoConfig({
    accessToken: "APP_USR-3877524555477418-040120-96364adfa59dc939fc9bca3341e883fb-581759247",
});

const createPreferenceRouter = Router(); 

createPreferenceRouter.post("/", cors(),async (req, res) => {
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

        res.header()

    }catch(error){
        res.status(500).json({
            error: "algo anda mal con la preferencia"
        });
    } 
});

export { createPreferenceRouter } 