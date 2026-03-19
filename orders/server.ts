import Koa from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import Router from '@koa/router';
import { RegisterRoutes } from '../build/orders-routes';
import { connectToDatabase } from '../src/db';
import { Db } from 'mongodb';

export interface AppOrdersDatabaseState { ordersDb: Db; }

export default async function server(port: number = 3002, testing: boolean = false): Promise<{ server: ReturnType<Koa['listen']>, state: AppOrdersDatabaseState }> {
    const app = new Koa<AppOrdersDatabaseState, Koa.DefaultContext>();
    const router = new Router();
    const db = await connectToDatabase();
    const state: AppOrdersDatabaseState = { ordersDb: db };
    app.use(async (ctx, next): Promise<void> => { ctx.state = state; await next(); });
    app.use(cors());
    app.use(koaBody());
    RegisterRoutes(router);
    app.use(router.routes());
    app.use(router.allowedMethods());
    const instance = app.listen(port, () => {
        if (!testing) console.log(`Orders server listening on port ${port}`);
    });
    return { server: instance, state };
}

if (process.env.NODE_ENV !== 'test') { server(3002); }
