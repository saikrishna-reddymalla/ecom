import {Router} from 'express';

const router=Router();


router.get('/products', (req,res)=> {
    res.send('List of products')
})
router.post('/products', (req,res)=> {
    res.send('new product added')
})
// to get the product with speciic id 
router.get('/products/:id', (req,res)=> {
    console.log(req)
    res.send('ABC product')
})

// to get header

router.get('/products/:id', (req,res)=> {
    console.log(req.params)
    res.send('ABC product')
})

export default router