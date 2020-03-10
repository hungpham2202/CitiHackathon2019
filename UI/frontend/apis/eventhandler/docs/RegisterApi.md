# CitibankEventHandler.RegisterApi

All URIs are relative to *http://192.168.8.103:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerCreate**](RegisterApi.md#registerCreate) | **POST** /register/ | 
[**registerDelete**](RegisterApi.md#registerDelete) | **DELETE** /register/{id}/ | 
[**registerList**](RegisterApi.md#registerList) | **GET** /register/ | 
[**registerPartialUpdate**](RegisterApi.md#registerPartialUpdate) | **PATCH** /register/{id}/ | 
[**registerRead**](RegisterApi.md#registerRead) | **GET** /register/{id}/ | 
[**registerUpdate**](RegisterApi.md#registerUpdate) | **PUT** /register/{id}/ | 


<a name="registerCreate"></a>
# **registerCreate**
> RegisterSerializers registerCreate(data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.RegisterApi();

var data = new CitibankEventHandler.RegisterSerializers(); // RegisterSerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**RegisterSerializers**](RegisterSerializers.md)|  | 

### Return type

[**RegisterSerializers**](RegisterSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerDelete"></a>
# **registerDelete**
> registerDelete(id, )





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.RegisterApi();

var id = 56; // Number | A unique integer value identifying this register.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.registerDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this register. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerList"></a>
# **registerList**
> [RegisterSerializers] registerList()





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.RegisterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RegisterSerializers]**](RegisterSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerPartialUpdate"></a>
# **registerPartialUpdate**
> RegisterSerializers registerPartialUpdate(id, data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.RegisterApi();

var id = 56; // Number | A unique integer value identifying this register.

var data = new CitibankEventHandler.RegisterSerializers(); // RegisterSerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this register. | 
 **data** | [**RegisterSerializers**](RegisterSerializers.md)|  | 

### Return type

[**RegisterSerializers**](RegisterSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerRead"></a>
# **registerRead**
> RegisterSerializers registerRead(id, )





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.RegisterApi();

var id = 56; // Number | A unique integer value identifying this register.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this register. | 

### Return type

[**RegisterSerializers**](RegisterSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerUpdate"></a>
# **registerUpdate**
> RegisterSerializers registerUpdate(id, data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.RegisterApi();

var id = 56; // Number | A unique integer value identifying this register.

var data = new CitibankEventHandler.RegisterSerializers(); // RegisterSerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this register. | 
 **data** | [**RegisterSerializers**](RegisterSerializers.md)|  | 

### Return type

[**RegisterSerializers**](RegisterSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

