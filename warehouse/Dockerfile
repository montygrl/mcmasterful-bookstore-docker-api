FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN npx tsoa spec-and-routes -c warehouse/tsoa.json
RUN sed -i "s/import type \* as KoaRouter from '@koa\/router'/import Router from '@koa\/router'/" build/warehouse-routes.ts
RUN sed -i "s/router: KoaRouter/router: Router/" build/warehouse-routes.ts
EXPOSE 3003
CMD ["npx", "tsx", "./warehouse/server.ts"]
