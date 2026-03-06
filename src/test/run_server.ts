import { afterEach, beforeEach } from 'vitest';
import server, { AppBookDatabaseState, AppWarehouseDatabaseState } from '../server';

export interface ServerTestContext {
    address: string;
    state: AppBookDatabaseState & AppWarehouseDatabaseState;
    closeServer: () => void;
}

export default function (): void {
    beforeEach<ServerTestContext>(async (context: ServerTestContext) => {
        const { server: instance, state } = await server(0, true);
        const address = instance.address();
        if (typeof address === 'string') {
            context.address = `http://${address}`;
        } else if (address !== null) {
            context.address = `http://localhost:${address.port}`;
        } else {
            throw new Error('couldnt set up server');
        }
        context.state = state;
        context.closeServer = () => {
            instance.close();
        };
    });

    afterEach<ServerTestContext>(async (context: ServerTestContext) => {
        context.closeServer();
    });
}