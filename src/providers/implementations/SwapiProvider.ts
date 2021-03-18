import swapi from "../../apis/swapi";
import IListSwapiDTO from "../dtos/IListSwapiDTO";
import ISwapiProvider from "./ISwapiProvider";

class SwapiProvider implements ISwapiProvider {
  public async getFilmsNumber(nome: string): Promise<number> {
    const swPlanets = await this.list();
    let total = 0;

    const planet = swPlanets.filter(p => p.name === nome);

    planet.forEach(p => {
      p.films.forEach(n => {
        total++;
      })
    });

    return total;
  }
  public async list(): Promise<IListSwapiDTO[]> {
    let swPlanets: IListSwapiDTO[];

    await swapi.get('/planets').then(response => {
      swPlanets = response.data.results;
    });

    return swPlanets;

  }
}

export default SwapiProvider;