import Koa from 'koa';
import Router from '@koa/router';
import { koaSwagger } from 'koa2-swagger-ui';
import swagger from '../build/swagger.json';

export default async function server(port: number = 3000, testing: boolean = false): Promise<{ server: ReturnType<Koa['listen']> }> {
    const app = new Koa();
    const router = new Router();

    app.use(koaSwagger({
        routePrefix: '/docs',
        specPrefix: '/docs/spec',
        exposeSpec: true,
        swaggerOptions: { spec: swagger }
    }));

    app.use(router.routes());
    app.use(router.allowedMethods());

    const instance = app.listen(port, () => {
        if (!testing) console.log(`Docs server listening on port ${port}`);
    });

    return { server: instance };
}

if (process.env.NODE_ENV !== 'test') { server(3000); }
