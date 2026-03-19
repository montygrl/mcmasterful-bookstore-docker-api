/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import { fetchMiddlewares, KoaTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WarehouseRoutes } from './../src/warehouse/warehouse.route';
import type { Context, Next, Middleware, Request as KRequest, Response as KResponse } from 'koa';
import Router from '@koa/router';


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ShelfId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ShelfStock": {
        "dataType": "refObject",
        "properties": {
            "shelf": {"ref":"ShelfId","required":true},
            "count": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookID": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PlaceOnShelfBody": {
        "dataType": "refObject",
        "properties": {
            "bookId": {"ref":"BookID","required":true},
            "numberOfBooks": {"dataType":"double","required":true},
            "shelf": {"ref":"ShelfId","required":true},
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


        const argsWarehouseRoutes_findBookLocations: Record<string, TsoaRoute.ParameterSchema> = {
                bookId: {"in":"path","name":"bookId","required":true,"ref":"BookID"},
        };
        router.get('/warehouse/books/:bookId/locations',
            ...(fetchMiddlewares<Middleware>(WarehouseRoutes)),
            ...(fetchMiddlewares<Middleware>(WarehouseRoutes.prototype.findBookLocations)),

            async function WarehouseRoutes_findBookLocations(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsWarehouseRoutes_findBookLocations, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseRoutes();

            return templateService.apiHandler({
              methodName: 'findBookLocations',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsWarehouseRoutes_getBookStock: Record<string, TsoaRoute.ParameterSchema> = {
                bookId: {"in":"path","name":"bookId","required":true,"ref":"BookID"},
        };
        router.get('/warehouse/books/:bookId/stock',
            ...(fetchMiddlewares<Middleware>(WarehouseRoutes)),
            ...(fetchMiddlewares<Middleware>(WarehouseRoutes.prototype.getBookStock)),

            async function WarehouseRoutes_getBookStock(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsWarehouseRoutes_getBookStock, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseRoutes();

            return templateService.apiHandler({
              methodName: 'getBookStock',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsWarehouseRoutes_placeBooksOnShelf: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"PlaceOnShelfBody"},
        };
        router.post('/warehouse/shelves',
            ...(fetchMiddlewares<Middleware>(WarehouseRoutes)),
            ...(fetchMiddlewares<Middleware>(WarehouseRoutes.prototype.placeBooksOnShelf)),

            async function WarehouseRoutes_placeBooksOnShelf(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsWarehouseRoutes_placeBooksOnShelf, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new WarehouseRoutes();

            return templateService.apiHandler({
              methodName: 'placeBooksOnShelf',
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
