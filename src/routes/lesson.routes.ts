import { Router } from "express";
import { getRepository } from "typeorm";
import Lesson from "../models/Lesson";

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) =>{

    try{

        const repositoryLesson = getRepository(Lesson);
        
        const {description} = request.body
        const lesson = {
            description
        }
        const createLesson = repositoryLesson.create(lesson)
        const res = await repositoryLesson.save(createLesson);
        return response.status(201).json(res);
    }catch(err){
        console.log("Erro: ", err.message)
    }
});

export default lessonRouter;