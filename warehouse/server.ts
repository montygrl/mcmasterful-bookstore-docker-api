import Koa from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import Router from '@koa/router';
import { RegisterRoutes } from '../build/warehouse-routes';
import { connectToDatabase } from '../src/db';
import { Db } from 'mongodb';

export interface AppWarehouseDatabaseState { warehouseDb: Db; }

export default async function server(port: number = 3003, testing: boolean = false): Promise<{ server: ReturnType<Koa['listen']>, state: AppWarehouseDatabaseState }> {
    const app = new Koa<AppWarehouseDatabaseState, Koa.DefaultContext>();
    const router = new Router();
    const db = await connectToDatabase();
    const state: AppWarehouseDatabaseState = { warehouseDb: db };
    app.use(async (ctx, next): Promise<void> => { ctx.state = state; await next(); });
    app.use(cors());
    app.use(koaBody());
    RegisterRoutes(router);
    app.use(router.routes());
    app.use(router.allowedMethods());
    const instance = app.listen(port, () => {
        if (!testing) console.log(`Warehouse server listening on port ${port}`);
    });
    return { server: instance, state };
}

if (process.env.NODE_ENV !== 'test') { server(3003); }
