import { Request, Response } from 'express';
import ListPlanetsByNameService from '../services/ListPlanetsByNameService';


export default class  PlanetsByNameController {
    public async index(request: Request, response: Response): Promise<Response> {
        try{
            const {nome} = request.params;

            const listPlanets = new ListPlanetsByNameService();
    
            const planets = await listPlanets.execute(nome);
    
            return response.json(planets);      
        }catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}