#!/bin/bash
npx tsoa spec-and-routes
sed -i "s/import type \* as KoaRouter from '@koa\/router'/import Router from '@koa\/router'/" build/routes.ts
sed -i "s/router: KoaRouter/router: Router/" build/routes.ts
npx @openapitools/openapi-generator-cli generate -i ./build/swagger.json -o ./client -g typescript-fetch --skip-validate-spec