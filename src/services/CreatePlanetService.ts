import { getCustomRepository } from "typeorm";
import ICreatePlanetDTO from "../dtos/ICreatePlanetDTO";
import Planet from "../entities/Planet";
import PlanetsRepository from "../repositories/PlanetsRepository";

class CreatePlanetService {
    public async execute({nome, clima, terreno}: ICreatePlanetDTO): Promise<Planet>{
        const planetsRepository = getCustomRepository(PlanetsRepository);

        const findPlanet = await planetsRepository.findByName(nome);

        if(findPlanet)
            throw new Error('This planet already exists.');

        const planet = await planetsRepository.create({ nome, clima, terreno });
   
        return planet;
    }
}

export default CreatePlanetService;