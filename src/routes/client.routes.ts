import { Router } from'express';
import { getRepository } from 'typeorm';
import Client from '../models/Client';

const clientRouter = Router();

clientRouter.post('/', async(request, response) =>{
    try{

        const repositoryClient = getRepository(Client);
        const {name, buyLast, purchases} = request.body
        const client = {
            name,
            buyLast,
            purchases,
        }
        const createClient = repositoryClient.create(client)
        const res = await repositoryClient.save(createClient);
        return response.status(201).json(res);
    }catch(err){
        console.log("Erro: ", err.message)
    }
});

clientRouter.get('/', async(request, response) =>{
    try{
        const repositoryClient = getRepository(Client);

        const clientAll = await repositoryClient.find();
        return response.status(200).json(clientAll);
    }catch(err){
        console.log("Erro: ", err.message)
    }
});

clientRouter.get('/:id', async(request, response) =>{
    try{
        const repositoryClient = getRepository(Client);

        const id = request.params.id;
        const clientOne = await repositoryClient.find({
            where:{
                id
            }
        });
        return response.status(200).json(clientOne);
    }catch(err){
        console.log("Erro: ", err.message)
    }
});

clientRouter.put('/:id', async(request, response) =>{
    try{
        const repositoryClient = getRepository(Client);

        const id = request.params.id;
        const {name} = request.body
        const clientChange = await repositoryClient.update(id, {name});
        return response.status(200).json(clientChange);
    }catch(err){
        console.log("Erro: ", err.message)
    }

    const {name, buyLast, purchases} = request.body
});

clientRouter.delete('/:id', async(request, response) =>{
    try{
        const repositoryClient = getRepository(Client);

        const id = request.params.id;
        const clientDelete = await repositoryClient.delete(id);
        return response.status(200).send();
    }catch(err){
        console.log("Erro: ", err.message)
    }

    const {name, buyLast, purchases} = request.body
});

export default clientRouter;