#!/bin/bash
# Generate routes and spec for each service
npx tsoa spec-and-routes -c books/tsoa.json
npx tsoa spec-and-routes -c orders/tsoa.json
npx tsoa spec-and-routes -c warehouse/tsoa.json

# Patch KoaRouter type in all generated route files
sed -i "s/import type \* as KoaRouter from '@koa\/router'/import Router from '@koa\/router'/" build/books-routes.ts
sed -i "s/router: KoaRouter/router: Router/" build/books-routes.ts
sed -i "s/import type \* as KoaRouter from '@koa\/router'/import Router from '@koa\/router'/" build/orders-routes.ts
sed -i "s/router: KoaRouter/router: Router/" build/orders-routes.ts
sed -i "s/import type \* as KoaRouter from '@koa\/router'/import Router from '@koa\/router'/" build/warehouse-routes.ts
sed -i "s/router: KoaRouter/router: Router/" build/warehouse-routes.ts

# Generate combined client
npx @openapitools/openapi-generator-cli generate -i ./build/swagger.json -o ./client -g typescript-fetch --skip-validate-spec
