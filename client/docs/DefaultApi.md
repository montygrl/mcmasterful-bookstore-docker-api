# DefaultApi

All URIs are relative to */api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrUpdateBook**](DefaultApi.md#createorupdatebook) | **POST** /books | Create or update a book |
| [**createOrder**](DefaultApi.md#createorder) | **POST** /orders | Create a new order |
| [**deleteBook**](DefaultApi.md#deletebook) | **DELETE** /books/{book} | Delete a book |
| [**findBookLocations**](DefaultApi.md#findbooklocations) | **GET** /warehouse/books/{bookId}/locations | Find where a book is located |
| [**fulfillOrder**](DefaultApi.md#fulfillorder) | **POST** /orders/{orderId}/fulfill | Fulfill an order |
| [**getBookInfo**](DefaultApi.md#getbookinfo) | **GET** /books/{book} | Get information about a book |
| [**getBookStock**](DefaultApi.md#getbookstock) | **GET** /warehouse/books/{bookId}/stock | Get total stock for a book |
| [**getOrder**](DefaultApi.md#getorder) | **GET** /orders/{orderId} | Get a specific order |
| [**listBooks**](DefaultApi.md#listbooks) | **GET** /books | List all books |
| [**listOrders**](DefaultApi.md#listorders) | **GET** /orders | List all orders |
| [**placeBooksOnShelf**](DefaultApi.md#placebooksonshelf) | **POST** /warehouse/shelves | Place books on a shelf |
| [**sayHello**](DefaultApi.md#sayhello) | **GET** /hello/{name} |  |



## createOrUpdateBook

> CreateOrUpdateBook200Response createOrUpdateBook(body)

Create or update a book

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CreateOrUpdateBookRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // CreateBookBody
    body: ...,
  } satisfies CreateOrUpdateBookRequest;

  try {
    const data = await api.createOrUpdateBook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [CreateBookBody](CreateBookBody.md) |  | |

### Return type

[**CreateOrUpdateBook200Response**](CreateOrUpdateBook200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createOrder

> CreateOrder200Response createOrder(body)

Create a new order

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { CreateOrderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // CreateOrderBody
    body: ...,
  } satisfies CreateOrderRequest;

  try {
    const data = await api.createOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [CreateOrderBody](CreateOrderBody.md) |  | |

### Return type

[**CreateOrder200Response**](CreateOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteBook

> { [key: string]: any; } deleteBook(book)

Delete a book

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { DeleteBookRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // any
    book: ...,
  } satisfies DeleteBookRequest;

  try {
    const data = await api.deleteBook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **book** | `any` |  | [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findBookLocations

> Array&lt;ShelfStock&gt; findBookLocations(bookId)

Find where a book is located

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { FindBookLocationsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // any
    bookId: ...,
  } satisfies FindBookLocationsRequest;

  try {
    const data = await api.findBookLocations(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bookId** | `any` |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;ShelfStock&gt;**](ShelfStock.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## fulfillOrder

> { [key: string]: any; } fulfillOrder(orderId, body)

Fulfill an order

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { FulfillOrderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // any
    orderId: ...,
    // FulfillOrderBody
    body: ...,
  } satisfies FulfillOrderRequest;

  try {
    const data = await api.fulfillOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | `any` |  | [Defaults to `undefined`] |
| **body** | [FulfillOrderBody](FulfillOrderBody.md) |  | |

### Return type

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBookInfo

> BookInfo getBookInfo(book)

Get information about a book

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetBookInfoRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // any | The ID of the book to retrieve
    book: ...,
  } satisfies GetBookInfoRequest;

  try {
    const data = await api.getBookInfo(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **book** | `any` | The ID of the book to retrieve | [Defaults to `undefined`] |

### Return type

[**BookInfo**](BookInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Information about the book and its stock levels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBookStock

> GetBookStock200Response getBookStock(bookId)

Get total stock for a book

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetBookStockRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // any
    bookId: ...,
  } satisfies GetBookStockRequest;

  try {
    const data = await api.getBookStock(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bookId** | `any` |  | [Defaults to `undefined`] |

### Return type

[**GetBookStock200Response**](GetBookStock200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrder

> Order getOrder(orderId)

Get a specific order

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { GetOrderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // any
    orderId: ...,
  } satisfies GetOrderRequest;

  try {
    const data = await api.getOrder(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **orderId** | `any` |  | [Defaults to `undefined`] |

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listBooks

> Array&lt;BookInfo&gt; listBooks()

List all books

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ListBooksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.listBooks();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;BookInfo&gt;**](BookInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrders

> Array&lt;Order&gt; listOrders()

List all orders

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ListOrdersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.listOrders();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Order&gt;**](Order.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## placeBooksOnShelf

> { [key: string]: any; } placeBooksOnShelf(body)

Place books on a shelf

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { PlaceBooksOnShelfRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // PlaceOnShelfBody
    body: ...,
  } satisfies PlaceBooksOnShelfRequest;

  try {
    const data = await api.placeBooksOnShelf(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [PlaceOnShelfBody](PlaceOnShelfBody.md) |  | |

### Return type

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sayHello

> string sayHello(name)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { SayHelloRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    name: name_example,
  } satisfies SayHelloRequest;

  try {
    const data = await api.sayHello(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` |  | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

