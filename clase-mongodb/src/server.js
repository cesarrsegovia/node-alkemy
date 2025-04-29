import express from 'express';
import { initMongoDB } from './config/db-connection.js';
import { errorHandler } from './middlewares/error-handler.js';
import productRouter from './routes/product-router.js'



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', productRouter)

app.use(errorHandler);


initMongoDB()
            .then(()=>console.log("conectado a la db"))
            .catch((error) => console.log(error));

app.listen(8080, () => console.log("SERVER OK, puerto 8080")
)