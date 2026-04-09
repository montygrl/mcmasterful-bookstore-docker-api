FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN npx tsoa spec-and-routes -c books/tsoa.json
RUN sed -i "s/import type \* as KoaRouter from '@koa\/router'/import Router from '@koa\/router'/" build/books-routes.ts
RUN sed -i "s/router: KoaRouter/router: Router/" build/books-routes.ts
EXPOSE 3001
CMD ["npx", "tsx", "./books/server.ts"]
