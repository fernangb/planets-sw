import IListSwapiDTO from "../dtos/IListSwapiDTO";

export default interface ISwapiProvider {
    list(): Promise<IListSwapiDTO[]>;
    getFilmsNumber(nome: string): Promise<number> ;
  }
  