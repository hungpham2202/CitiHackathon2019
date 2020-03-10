# CitibankEventHandler.CategoriesApi

All URIs are relative to *http://192.168.8.103:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesCreate**](CategoriesApi.md#categoriesCreate) | **POST** /categories/ | 
[**categoriesDelete**](CategoriesApi.md#categoriesDelete) | **DELETE** /categories/{id}/ | 
[**categoriesList**](CategoriesApi.md#categoriesList) | **GET** /categories/ | 
[**categoriesPartialUpdate**](CategoriesApi.md#categoriesPartialUpdate) | **PATCH** /categories/{id}/ | 
[**categoriesRead**](CategoriesApi.md#categoriesRead) | **GET** /categories/{id}/ | 
[**categoriesUpdate**](CategoriesApi.md#categoriesUpdate) | **PUT** /categories/{id}/ | 


<a name="categoriesCreate"></a>
# **categoriesCreate**
> CategorySerializers categoriesCreate(data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.CategoriesApi();

var data = new CitibankEventHandler.CategorySerializers(); // CategorySerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CategorySerializers**](CategorySerializers.md)|  | 

### Return type

[**CategorySerializers**](CategorySerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoriesDelete"></a>
# **categoriesDelete**
> categoriesDelete(id, )





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.CategoriesApi();

var id = 56; // Number | A unique integer value identifying this category.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.categoriesDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this category. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoriesList"></a>
# **categoriesList**
> [CategorySerializers] categoriesList()





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.CategoriesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CategorySerializers]**](CategorySerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoriesPartialUpdate"></a>
# **categoriesPartialUpdate**
> CategorySerializers categoriesPartialUpdate(id, data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.CategoriesApi();

var id = 56; // Number | A unique integer value identifying this category.

var data = new CitibankEventHandler.CategorySerializers(); // CategorySerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this category. | 
 **data** | [**CategorySerializers**](CategorySerializers.md)|  | 

### Return type

[**CategorySerializers**](CategorySerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoriesRead"></a>
# **categoriesRead**
> CategorySerializers categoriesRead(id, )





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.CategoriesApi();

var id = 56; // Number | A unique integer value identifying this category.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this category. | 

### Return type

[**CategorySerializers**](CategorySerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoriesUpdate"></a>
# **categoriesUpdate**
> CategorySerializers categoriesUpdate(id, data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.CategoriesApi();

var id = 56; // Number | A unique integer value identifying this category.

var data = new CitibankEventHandler.CategorySerializers(); // CategorySerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this category. | 
 **data** | [**CategorySerializers**](CategorySerializers.md)|  | 

### Return type

[**CategorySerializers**](CategorySerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

