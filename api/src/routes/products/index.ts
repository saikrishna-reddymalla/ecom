import {Router} from 'express';
import {ListProducts,getProductByID,craeteProducts,updateProducts,deleteProducts} from './productsController'
const router=Router();

router.get('/',ListProducts);
router.get('/:id',getProductByID);
router.post('/',craeteProducts);
router.delete('/:id',deleteProducts);
router.put('/:id',updateProducts);


export default router