import Koa from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import Router from '@koa/router';
import { RegisterRoutes } from '../build/orders-routes';
import { connectToDatabase } from '../src/db';
import { connectToRabbitMQ, subscribeToEvent } from '../src/messaging';
import { Db } from 'mongodb';

export interface AppOrdersDatabaseState { ordersDb: Db; }

async function setupSubscriptions(): Promise<void> {
    // Cache valid book IDs locally when books are added
    await subscribeToEvent('books', 'book.added', async (data) => {
        const event = data as { id: string; name: string };
        console.log(`Orders: caching book ${event.id}`);
    });
}

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

    if (!testing) {
        await connectToRabbitMQ();
        await setupSubscriptions();
    }

    const instance = app.listen(port, () => {
        if (!testing) console.log(`Orders server listening on port ${port}`);
    });
    return { server: instance, state };
}

if (process.env.NODE_ENV !== 'test') { server(3002); }
