import { request, response, Router } from'express';
import ClientRepository from '../repositories/ClientRepository';



const clientRouter = Router();
const clientRepository = new ClientRepository();

clientRouter.get('/', (request, response) =>{
    response.json(clientRepository.findAll())    
});

clientRouter.get('/:id', (request, response) =>{
    const id = request.params.id;
    response.json(clientRepository.findById(id)) ;    
});

clientRouter.post('/', async(request, response) =>{
    try{ 
        const {name, buyLast, purchases} = request.body;
        const client = clientRepository.save({
            id:"",
            name, 
            buyLast, 
            purchases
        })
     
        return response.status(201).json(client);
    }catch (err) {
        return response.status(400).json({ Error: err });
      }
});


export default clientRouter;