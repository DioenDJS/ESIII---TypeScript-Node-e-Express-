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

clientRouter.put('/:id', async (request, response) => {
    try{

        const { name } = request.body;
        const id  = request.params.id;
        
        const clientChange = await clientRepository.alterar(name, id );
        return response.status(200).json(clientChange);
    }catch (err) {
        return response.status(400).json({ err});
      }
});

clientRouter.delete('/:id', async (request, response) => {
    try{

        const id  = request.params.id;
        
        const clientChange = await clientRepository.delete(id);
        return response.status(200).json(clientChange);
    }catch (err) {
        return response.status(400).json({ err});
      }
});

export default clientRouter;