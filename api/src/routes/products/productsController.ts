
import { Request ,Response } from 'express';


export function ListProducts (req : Request, res: Response) {
    res.send('ListProducts')
}

export function getProductByID (req : Request, res: Response)  {
    res.send('getProductByID')
}

export function craeteProducts(req : Request, res: Response)  {
    res.send('craeteProducts')
}

export function updateProducts (req : Request, res: Response)  {
    res.send('updateProducts')
}

export function deleteProducts (req : Request, res: Response)  {
    res.send(' deleteProducts')
}