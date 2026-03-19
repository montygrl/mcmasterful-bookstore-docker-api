/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import { fetchMiddlewares, KoaTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BookRoutes } from './../src/books/book.route';
import type { Context, Next, Middleware, Request as KRequest, Response as KResponse } from 'koa';
import Router from '@koa/router';


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "BookID": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookInfo": {
        "dataType": "refObject",
        "properties": {
            "id": {"ref":"BookID","required":true},
            "name": {"dataType":"string","required":true},
            "author": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "price": {"dataType":"double","required":true},
            "image": {"dataType":"string","required":true},
            "stock": {"dataType":"double"},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateBookBody": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "name": {"dataType":"string","required":true},
            "price": {"dataType":"double","required":true},
            "description": {"dataType":"string","required":true},
            "author": {"dataType":"string","required":true},
            "image": {"dataType":"string","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new KoaTemplateService(models, {"noImplicitAdditionalProperties":"ignore","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


export function RegisterRoutes(router: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


        const argsBookRoutes_listBooks: Record<string, TsoaRoute.ParameterSchema> = {
        };
        router.get('/books',
            ...(fetchMiddlewares<Middleware>(BookRoutes)),
            ...(fetchMiddlewares<Middleware>(BookRoutes.prototype.listBooks)),

            async function BookRoutes_listBooks(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsBookRoutes_listBooks, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BookRoutes();

            return templateService.apiHandler({
              methodName: 'listBooks',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookRoutes_getBookInfo: Record<string, TsoaRoute.ParameterSchema> = {
                book: {"in":"path","name":"book","required":true,"ref":"BookID"},
        };
        router.get('/books/:book',
            ...(fetchMiddlewares<Middleware>(BookRoutes)),
            ...(fetchMiddlewares<Middleware>(BookRoutes.prototype.getBookInfo)),

            async function BookRoutes_getBookInfo(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsBookRoutes_getBookInfo, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BookRoutes();

            return templateService.apiHandler({
              methodName: 'getBookInfo',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookRoutes_createOrUpdateBook: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateBookBody"},
        };
        router.post('/books',
            ...(fetchMiddlewares<Middleware>(BookRoutes)),
            ...(fetchMiddlewares<Middleware>(BookRoutes.prototype.createOrUpdateBook)),

            async function BookRoutes_createOrUpdateBook(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsBookRoutes_createOrUpdateBook, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BookRoutes();

            return templateService.apiHandler({
              methodName: 'createOrUpdateBook',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsBookRoutes_deleteBook: Record<string, TsoaRoute.ParameterSchema> = {
                book: {"in":"path","name":"book","required":true,"ref":"BookID"},
        };
        router.delete('/books/:book',
            ...(fetchMiddlewares<Middleware>(BookRoutes)),
            ...(fetchMiddlewares<Middleware>(BookRoutes.prototype.deleteBook)),

            async function BookRoutes_deleteBook(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsBookRoutes_deleteBook, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new BookRoutes();

            return templateService.apiHandler({
              methodName: 'deleteBook',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
