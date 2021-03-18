import { getCustomRepository } from "typeorm";
import Planet from "../entities/Planet";
import PlanetsRepository from "../repositories/PlanetsRepository";

class ListPlanetsByNameService {
    public async execute(nome: string): Promise<Planet | undefined> {
        const planetsRepository = getCustomRepository(PlanetsRepository);

        const planet = await planetsRepository.findByName(nome);

        if(!planet)
            throw new Error('Invalid name');

        return planet;
      }
}

export default ListPlanetsByNameService;