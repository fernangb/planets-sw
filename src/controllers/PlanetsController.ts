import { Request, Response } from 'express';
import CreatePlanetService from '../services/CreatePlanetService';
import DeletePlanetService from '../services/DeletePlanetService';
import ListPlanetsService from '../services/ListPlanetsService';


export default class  PlanetsController {
    public async create(request: Request, response: Response): Promise<Response> { 
        try{
            const {nome, clima, terreno} = request.body;

            const createPlanet = new CreatePlanetService();
    
            const planet = await createPlanet.execute({nome, clima, terreno});

            return response.json(planet);
        } catch (err) {
            return response.status(400).json({ error: err.message });
          }
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const listPlanets = new ListPlanetsService();

        const planets = await listPlanets.execute();

        return response.json(planets);
     }

     public async delete(request: Request, response: Response): Promise<Response> {
        try{
            const {id} = request.params;

            const deletePlanet = new DeletePlanetService();

            await deletePlanet.execute(id);
    
            return response.json({message: 'Planet deleted sucessfully'});

        }catch (err) {
            return response.status(400).json({ error: err.message });
        }
     }

}