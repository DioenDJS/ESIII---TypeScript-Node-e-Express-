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

productRouter.put('/:id', async (request, response) => {
        const { buyPrice, sellPrice, tags, lovers , code, description } = request.body;
        const { id } = request.params;
    try{
        const productChange = productRepository.alterar({code, description,buyPrice, sellPrice, tags, lovers, id})
        
        return response.status(200).json(productChange);
    }catch (err) {
        return response.status(400).json({ err});
      }
});

// productRouter.delete('/:id', async (request, response) => {
//     const { id } = request.params;
//     try{
//         const productChange = await productRepository.delete(id)
//         return response.status(200).send(productChange);
//     }catch(err){
//         return response.status(400).json({ Error: err });
//     }


// });

export default productRouter;