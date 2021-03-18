import { getCustomRepository } from "typeorm";
import Planet from "../entities/Planet";
import PlanetsRepository from "../repositories/PlanetsRepository";

class ListPlanetsService {

    public async execute(): Promise<Planet[]> {
        const planetsRepository = getCustomRepository(PlanetsRepository);

        return planetsRepository.index();
    
      }
}

export default ListPlanetsService;