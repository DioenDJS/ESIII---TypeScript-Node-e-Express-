import { Router } from'express';
import { getRepository } from 'typeorm';
import Product from '../models/Product';
// import ProductRepository from '../repositories/ProductRepository';
// import CreateProductService from '../services/CreateProductService';

const productRouter = Router();

productRouter.post('/', async (request, response) =>{
    const repositoryClient = getRepository(Product);
    try{ 
        const {code, description, buyPrice, sellPrice, tags} = request.body;
        const product = {
            code, 
            description, 
            buyPrice, 
            sellPrice, 
            tags,
        }
        const createProduct = repositoryClient.create(product)
        const res = await repositoryClient.save(createProduct);
        // const service = new CreateProductService(productRepository)
        // const product = service.execute({code, description, buyPrice, sellPrice, tags, lovers, id})
        return response.status(201).json(res);
    }catch (err) {
        return response.status(400).json({ Error: err });
      }
});

// productRouter.put('/:id', async (request, response) => {
//         const { buyPrice, sellPrice, code, description } = request.body;
//         const { id } = request.params;
//     try{
//         const productChange = await productRepository.alterar(code, description, buyPrice, sellPrice, id)
        
//         return response.status(200).json(productChange);
//     }catch (err) {
//         return response.status(400).json({ err});
//       }
// });

// productRouter.delete('/:id', async (request, response) => {
//     try{

//         const id  = request.params.id;
        
//         const clientChange = await productRepository.delete(id);
//         return response.status(200).json(clientChange);
//     }catch (err) {
//         return response.status(400).json({ err});
//       }
// });

export default productRouter;