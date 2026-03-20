import amqp, { type Connection, type Channel } from 'amqplib';

let connection: Connection | null = null;
let channel: Channel | null = null;

const RABBITMQ_URL = process.env.RABBITMQ_URL ?? 'amqp://localhost';

export async function connectToRabbitMQ(): Promise<Channel> {
    if (channel) return channel;
    
    // Retry logic — RabbitMQ may not be ready immediately
    let retries = 10;
    while (retries > 0) {
        try {
            connection = await amqp.connect(RABBITMQ_URL);
            channel = await connection.createChannel();
            console.log('Connected to RabbitMQ');
            return channel;
        } catch (err) {
            retries--;
            console.log(`RabbitMQ not ready, retrying... (${retries} left)`);
            await new Promise(res => setTimeout(res, 3000));
        }
    }
    throw new Error('Could not connect to RabbitMQ');
}

export async function publishEvent(exchange: string, event: string, data: unknown): Promise<void> {
    const ch = await connectToRabbitMQ();
    await ch.assertExchange(exchange, 'topic', { durable: true });
    ch.publish(exchange, event, Buffer.from(JSON.stringify(data)));
    console.log(`Published event: ${event}`, data);
}

export async function subscribeToEvent(exchange: string, event: string, handler: (data: unknown) => Promise<void>): Promise<void> {
    const ch = await connectToRabbitMQ();
    await ch.assertExchange(exchange, 'topic', { durable: true });
    const q = await ch.assertQueue('', { exclusive: true });
    await ch.bindQueue(q.queue, exchange, event);
    ch.consume(q.queue, async (msg) => {
        if (msg) {
            const data = JSON.parse(msg.content.toString());
            await handler(data);
            ch.ack(msg);
        }
    });
    console.log(`Subscribed to event: ${event}`);
}
