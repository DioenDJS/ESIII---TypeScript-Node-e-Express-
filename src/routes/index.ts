import { Router } from 'express';
import classRouter from './class.routes';
// import clientRouter from './client.routes';
// import productRouter from './product.routes';

const routes = Router();

// routes.use('/products', productRouter);
// routes.use('/clients', clientRouter);
routes.use('/class', classRouter);
export default routes;