import { getCustomRepository } from "typeorm";
import Planet from "../entities/Planet";
import PlanetsRepository from "../repositories/PlanetsRepository";

class ListPlanetsByIdService {
    public async execute(id: string): Promise<Planet> {
        const planetsRepository = getCustomRepository(PlanetsRepository);


        const planet = await planetsRepository.findById(id);

        if(!planet){
          throw new Error('Invalid ID');
        }

        return planet
      }
}

export default ListPlanetsByIdService;