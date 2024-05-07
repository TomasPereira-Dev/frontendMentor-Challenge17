# Audiophile

This project is part of Frontend Mentor's catalogue of project ideas.  

The original goal was to (based only on a few images) do a complete E-commerce page with a fully responsive design.

On top of that, I added a payment prossesor for debit/credit card transactions, so it works like a real E-commerce.

## Run It Locally
>[!NOTE]
This is assuming you have both Node.js and git installed, if not, do it before start.

### Run the client(frontend)  
first clone this repo in your terminal

```
git clone https://github.com/TomasPereira-Dev/frontendMentor-Challenge17.git
```

Then change the folder you are into with

```
cd ./frontendMentor-Challenge17/client
```

Once you are there, Install everything with 

```
npm install
```

And run it.
```
npm run dev
```
### Run the server(backend)
You will need to have the server running in order for the Mercado Pago's checkout to work  

Change the folder in a separate console to  
```
cd ./frontendMentor-Challenge17/server
```

Install the dependencies and then turn on the server with  
```
npm install express cors mercadopago
node index.js
```

## Tech I Used
I mainly used React, JavaScript and Tailwind for the styling, all the data used for this project  
came from a local JSON file, the backend uses Node.js and Express and the payments were handled with Mercado Pago's Checkout Pro API.

## Acknowledgements

Thanks to [Gonzalo Pozzo A.K.A goncy](https://www.youtube.com/@goncypozzo) and his community for the feedback and goodwill.
Thanks to [Pablo (onTheCode)](https://www.youtube.com/@onthecode) for making the Checkout Pro docs easier to understand
Thanks to [Frontend Mentor](https://www.frontendmentor.io/) for the resources needed to make this project, and for the (slick) design.  
  
And to you, for taking some time to read this, have a nice day :)




