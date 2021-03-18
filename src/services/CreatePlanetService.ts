import { getCustomRepository } from "typeorm";
import ICreatePlanetDTO from "../dtos/ICreatePlanetDTO";
import Planet from "../entities/Planet";
import SwapiProvider from "../providers/implementations/SwapiProvider";
import PlanetsRepository from "../repositories/PlanetsRepository";

class CreatePlanetService {
    public async execute({nome, clima, terreno}: ICreatePlanetDTO): Promise<Planet>{
        try{
            const planetsRepository = getCustomRepository(PlanetsRepository);
            const swapiProvider = new SwapiProvider();

            const findPlanet = await planetsRepository.findByName(nome);
    
            if(findPlanet)
                throw new Error('This planet already exists.');

            const nr_filmes = await swapiProvider.getFilmsNumber(nome);


            if(!nr_filmes)
                throw new Error('Invalid planet');

            const planet = await planetsRepository.create({ nome, clima, terreno, nr_filmes });
       
            return planet;
        } catch (err) {
            return err.message;
        }
    }
}

export default CreatePlanetService;