import { Router } from 'express';
import PlanetsByIdController from '../controllers/PlanetsByIdController';
import PlanetsByNameController from '../controllers/PlanetsByNameController';
import PlanetsController from '../controllers/PlanetsController';

const planetRouter = Router();
const planetsController = new PlanetsController();
const planetsByNameController = new PlanetsByNameController();
const planetsByIdController = new PlanetsByIdController();


planetRouter.get('/', planetsController.index);
planetRouter.get('/name/:nome', planetsByNameController.index);
planetRouter.get('/:id', planetsByIdController.index);
planetRouter.post('/', planetsController.create);
planetRouter.delete('/:id', planetsController.delete);

export default planetRouter;