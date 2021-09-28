import { Router } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import Class from "../models/Class";
import ClassRepository from "../repositories/ClassRepository";

const classRouter = Router();

classRouter.post('/', async (request, response) =>{

    try{

        const repositoryClass = getRepository(Class);
        
        const res = await repositoryClass.save(request.body);
        return response.status(201).json(res);
    }catch(err){
        console.log("Erro: ", err.message)
    }
});

classRouter.get('/', async (request, response) =>{

    try{
        const repositoryClass = getRepository(Class);
        const classAll = await repositoryClass.find();
        return response.status(200).json(classAll);
    }catch(err){
        console.log("Erro: ", err.message)
    }
})

classRouter.get('/:id', async (request, response) =>{
    try{
        const repositoryClass = getRepository(Class);

        const id = request.params.id;

        const classOne = await repositoryClass.find({
           where:{
               id
           }
        });
        return response.status(200).json(classOne);
    }catch(err){
        console.log("Erro: ", err.message)
    }
});

classRouter.get('/', async (request, response) =>{
    try{
        const repositoryClass = getCustomRepository(ClassRepository);

        const name = request.body;

        const classname = await repositoryClass.findByname(name)
        return response.status(200).json(classname);
    }catch(err){
        console.log("Erro: ", err.message)
    }
})

export default classRouter;