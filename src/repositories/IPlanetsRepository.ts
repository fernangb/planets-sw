import ICreatePlanetDTO from "../dtos/ICreatePlanetDTO";
import Planet from "../entities/Planet";

export default interface IPlanetsRepository {
    create(data: ICreatePlanetDTO): Promise<Planet>;
    index(): Promise<Planet[]>;
    delete(id: string): Promise<void>;
    findByName(name: string): Promise<Planet | undefined>;
    findById(id: string): Promise<Planet | undefined>;
}