import Koa from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import Router from '@koa/router';
import { koaSwagger } from 'koa2-swagger-ui';
import { RegisterRoutes } from '../build/routes';
import { connectToDatabase } from './db';
import swagger from '../build/swagger.json';
import { Db } from 'mongodb';

export default async function server(port: number = 3000, testing: boolean = false): Promise<{ server: ReturnType<Koa['listen']>, state: Db }> {
    const app = new Koa();
    const router = new Router();

    const state = await connectToDatabase();

    app.use(cors());
    app.use(koaBody());

    app.use(koaSwagger({
        routePrefix: '/docs',
        specPrefix: '/docs/spec',
        exposeSpec: true,
        swaggerOptions: {
            spec: swagger
        }
    }));

    RegisterRoutes(router);

    app.use(router.routes());
    app.use(router.allowedMethods());

    const instance = app.listen(port, () => {
        if (!testing) console.log(`Server listening on port ${port}`);
    });

    return { server: instance, state };
}

if (process.env.NODE_ENV !== 'test') {
    server(3000);
}