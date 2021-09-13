import { Router } from'express';

const productRouter = Router();

productRouter.get('/', (request, response) =>{
    throw Error('Ainda não implementado');
});

productRouter.post('/', (request, response) =>{
    throw Error('Ainda não implementado');
});

export default productRouter;