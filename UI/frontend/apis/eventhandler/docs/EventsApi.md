# CitibankEventHandler.EventsApi

All URIs are relative to *http://192.168.8.103:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsCreate**](EventsApi.md#eventsCreate) | **POST** /events/ | 
[**eventsDelete**](EventsApi.md#eventsDelete) | **DELETE** /events/{id}/ | 
[**eventsList**](EventsApi.md#eventsList) | **GET** /events/ | 
[**eventsPartialUpdate**](EventsApi.md#eventsPartialUpdate) | **PATCH** /events/{id}/ | 
[**eventsRead**](EventsApi.md#eventsRead) | **GET** /events/{id}/ | 
[**eventsUpdate**](EventsApi.md#eventsUpdate) | **PUT** /events/{id}/ | 


<a name="eventsCreate"></a>
# **eventsCreate**
> EventSerializers eventsCreate(data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.EventsApi();

var data = new CitibankEventHandler.EventSerializers(); // EventSerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**EventSerializers**](EventSerializers.md)|  | 

### Return type

[**EventSerializers**](EventSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsDelete"></a>
# **eventsDelete**
> eventsDelete(id, )





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.EventsApi();

var id = 56; // Number | A unique integer value identifying this event.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsList"></a>
# **eventsList**
> [EventSerializers] eventsList()





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.EventsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[EventSerializers]**](EventSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsPartialUpdate"></a>
# **eventsPartialUpdate**
> EventSerializers eventsPartialUpdate(id, data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.EventsApi();

var id = 56; // Number | A unique integer value identifying this event.

var data = new CitibankEventHandler.EventSerializers(); // EventSerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 
 **data** | [**EventSerializers**](EventSerializers.md)|  | 

### Return type

[**EventSerializers**](EventSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsRead"></a>
# **eventsRead**
> EventSerializers eventsRead(id, )





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.EventsApi();

var id = 56; // Number | A unique integer value identifying this event.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 

### Return type

[**EventSerializers**](EventSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsUpdate"></a>
# **eventsUpdate**
> EventSerializers eventsUpdate(id, data)





### Example
```javascript
var CitibankEventHandler = require('citibank_event_handler');
var defaultClient = CitibankEventHandler.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new CitibankEventHandler.EventsApi();

var id = 56; // Number | A unique integer value identifying this event.

var data = new CitibankEventHandler.EventSerializers(); // EventSerializers | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this event. | 
 **data** | [**EventSerializers**](EventSerializers.md)|  | 

### Return type

[**EventSerializers**](EventSerializers.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

