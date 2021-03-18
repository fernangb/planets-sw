import { Request, Response } from 'express';
import ListPlanetsByIdService from '../services/ListPlanetsByIdService';


export default class  PlanetsByIdController {
    public async index(request: Request, response: Response): Promise<Response> {
       try{
        const {id} = request.params;

        const listPlanets = new ListPlanetsByIdService();

        const planets = await listPlanets.execute(id);

        return response.json(planets);
       } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}