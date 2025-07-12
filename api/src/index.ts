import express from 'express';
import {productsRoutes, getProductByID,} from './routes/products/index';

const app =express()
const  port =3000;

app.get( '/', (req,res)=> {
    res.send('Hello Word')
});
app.use('/products', productsRoutes);

app.listen(port, () => {
    console.log(`example app is listening on port ${port}`);
})
