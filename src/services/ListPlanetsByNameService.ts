import { getCustomRepository } from "typeorm";
import swapi from "../apis/swapi";
import Planet from "../entities/Planet";
import PlanetsRepository from "../repositories/PlanetsRepository";

class ListPlanetsByNameService {
    public async execute(nome: string): Promise<Planet | undefined> {
        try{
            const planetsRepository = getCustomRepository(PlanetsRepository);

            const planet = await planetsRepository.findByName(nome);
    
            if(!planet)
                throw new Error('Invalid name');
    
                console.log(nome)
            const movies = await swapi.get(`/planets?name=${nome}`).then(resp => {
                console.log(resp.data.films)
            })
            console.log(movies.data.films);

            return planet;

        } catch (err) {
            return err.message;
        }
      }
}

export default ListPlanetsByNameService;