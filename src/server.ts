import Koa from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import Router from '@koa/router';
import { koaSwagger } from 'koa2-swagger-ui';
import { RegisterRoutes } from '../build/routes';
import { connectToDatabase } from './db';
import swagger from '../build/swagger.json';

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(koaBody());

// Swagger UI at http://localhost:3000/docs
app.use(koaSwagger({
    routePrefix: '/docs',
    specPrefix: '/docs/spec',
    exposeSpec: true,
    swaggerOptions: {
        spec: swagger
    }
}));

// Pass the router (not app) to tsoa
RegisterRoutes(router);

// Mount the router onto the app
app.use(router.routes());
app.use(router.allowedMethods());

connectToDatabase()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  });