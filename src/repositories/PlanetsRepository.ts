import { EntityRepository, getMongoRepository, MongoRepository, Repository } from 'typeorm';
import ICreatePlanetDTO from '../dtos/ICreatePlanetDTO';

import Planet from '../entities/Planet';
import IPlanetsRepository from './IPlanetsRepository';

@EntityRepository(Planet)
class PlanetsRepository implements IPlanetsRepository{
  private ormRepository: MongoRepository<Planet>;

  constructor(){
    this.ormRepository =  getMongoRepository(Planet);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findByName(nome: string): Promise<Planet | undefined> {
    const findPlanet = await this.ormRepository.findOne({
      where: {
        nome,
      },
    });

    return findPlanet;
  }
  public async findById(id: string): Promise<Planet | undefined> {
    const findPlanet = await this.ormRepository.findOne(id);

    return findPlanet;
  }

  public async index(): Promise<Planet[]> {
    return this.ormRepository.find();
  }

  public async create({nome, clima, terreno, nr_filmes}: ICreatePlanetDTO): Promise<Planet> {   
    const planet = this.ormRepository.create({nome, clima, terreno, nr_filmes});

    await this.ormRepository.save(planet);

    return planet;
  }

}

export default PlanetsRepository;