import { request, response, Router } from'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) =>{
    response.json(productRepository.findAll())    
});

productRouter.post('/', (request, response) =>{
    try{ 
        const service = new CreateProductService(productRepository)
        const {code, description, buyPrice, sellPrice, tags, lovers, id} = request.body;
        const product = service.execute({code, description, buyPrice, sellPrice, tags, lovers, id})
        return response.status(201).json(product);
    }catch (err) {
        return response.status(400).json({ Error: err });
      }
});

productRouter.put('/:id', (request, response) =>{
    const { buyPrice, sellPrice, tags, lovers } = request.body;
    const { id } = request.params;

    const productChange = productRepository.alterar(buyPrice, sellPrice, tags, lovers)
})
export default productRouter;