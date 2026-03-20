/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import { fetchMiddlewares, KoaTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HelloRoute } from './../src/hello.route';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WarehouseRoutes } from './../src/warehouse/warehouse.route';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OrderRoutes } from './../src/orders/orders.route';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BookRoutes } from './../src/books/book.route';
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
    "OrderId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_BookID.number_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"double"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Order": {
        "dataType": "refObject",
        "properties": {
            "orderId": {"ref":"OrderId","required":true},
            "books": {"ref":"Record_BookID.number_","required":true},
            "fulfilled": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateOrderBody": {
        "dataType": "refObject",
        "properties": {
            "books": {"dataType":"array","array":{"dataType":"refAlias","ref":"BookID"},"required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FulfillmentItem": {
        "dataType": "refObject",
        "properties": {
            "book": {"ref":"BookID","required":true},
            "shelf": {"dataType":"string","required":true},
            "numberOfBooks": {"dataType":"double","required":true},
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FulfillOrderBody": {
        "dataType": "refObject",
        "properties": {
            "fulfillment": {"dataType":"array","array":{"dataType":"refObject","ref":"FulfillmentItem"},"required":true},
        },
        "additionalProperties": true,
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


        const argsHelloRoute_sayHello: Record<string, TsoaRoute.ParameterSchema> = {
                name: {"in":"path","name":"name","required":true,"dataType":"string"},
        };
        router.get('/hello/:name',
            ...(fetchMiddlewares<Middleware>(HelloRoute)),
            ...(fetchMiddlewares<Middleware>(HelloRoute.prototype.sayHello)),

            async function HelloRoute_sayHello(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsHelloRoute_sayHello, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new HelloRoute();

            return templateService.apiHandler({
              methodName: 'sayHello',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
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
        const argsOrderRoutes_listOrders: Record<string, TsoaRoute.ParameterSchema> = {
        };
        router.get('/orders',
            ...(fetchMiddlewares<Middleware>(OrderRoutes)),
            ...(fetchMiddlewares<Middleware>(OrderRoutes.prototype.listOrders)),

            async function OrderRoutes_listOrders(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsOrderRoutes_listOrders, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new OrderRoutes();

            return templateService.apiHandler({
              methodName: 'listOrders',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderRoutes_getOrder: Record<string, TsoaRoute.ParameterSchema> = {
                orderId: {"in":"path","name":"orderId","required":true,"ref":"OrderId"},
        };
        router.get('/orders/:orderId',
            ...(fetchMiddlewares<Middleware>(OrderRoutes)),
            ...(fetchMiddlewares<Middleware>(OrderRoutes.prototype.getOrder)),

            async function OrderRoutes_getOrder(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsOrderRoutes_getOrder, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new OrderRoutes();

            return templateService.apiHandler({
              methodName: 'getOrder',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderRoutes_createOrder: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateOrderBody"},
        };
        router.post('/orders',
            ...(fetchMiddlewares<Middleware>(OrderRoutes)),
            ...(fetchMiddlewares<Middleware>(OrderRoutes.prototype.createOrder)),

            async function OrderRoutes_createOrder(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsOrderRoutes_createOrder, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new OrderRoutes();

            return templateService.apiHandler({
              methodName: 'createOrder',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsOrderRoutes_fulfillOrder: Record<string, TsoaRoute.ParameterSchema> = {
                orderId: {"in":"path","name":"orderId","required":true,"ref":"OrderId"},
                body: {"in":"body","name":"body","required":true,"ref":"FulfillOrderBody"},
        };
        router.post('/orders/:orderId/fulfill',
            ...(fetchMiddlewares<Middleware>(OrderRoutes)),
            ...(fetchMiddlewares<Middleware>(OrderRoutes.prototype.fulfillOrder)),

            async function OrderRoutes_fulfillOrder(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsOrderRoutes_fulfillOrder, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new OrderRoutes();

            return templateService.apiHandler({
              methodName: 'fulfillOrder',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
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
