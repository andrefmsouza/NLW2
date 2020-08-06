import { Request, Response, response} from 'express';
import db from '../database/conection';

export default class ConnectionController{
    async index(req: Request, res: Response){
        const total_connections = await db('connections').count('* as total')

        const { total } = total_connections[0];

        return response.status(201).json({total});
    }

    async create(req: Request, res: Response){
        const { user_id } = req.body;

        await db('connections').insert({
            user_id
        })

        return response.status(201).send()
    }
}