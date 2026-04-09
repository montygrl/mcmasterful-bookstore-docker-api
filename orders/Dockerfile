FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN npx tsoa spec-and-routes -c orders/tsoa.json
RUN sed -i "s/import type \* as KoaRouter from '@koa\/router'/import Router from '@koa\/router'/" build/orders-routes.ts
RUN sed -i "s/router: KoaRouter/router: Router/" build/orders-routes.ts
EXPOSE 3002
CMD ["npx", "tsx", "./orders/server.ts"]
