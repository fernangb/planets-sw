import { getCustomRepository } from "typeorm";
import Planet from "../entities/Planet";
import PlanetsRepository from "../repositories/PlanetsRepository";

class DeletePlanetService {
    public async execute(id: string): Promise<void> {
        const planetsRepository = getCustomRepository(PlanetsRepository);

        const findPlanet = await planetsRepository.findById(id);

        if(!findPlanet){
            throw new Error('Invalid ID');
        }

        await planetsRepository.delete(id);
      }
}

export default DeletePlanetService;