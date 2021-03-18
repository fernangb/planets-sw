import { Router } from 'express';
import planetRouter from './planets.routes';

const routes = Router();

routes.use('/planets', planetRouter);

export default routes;
