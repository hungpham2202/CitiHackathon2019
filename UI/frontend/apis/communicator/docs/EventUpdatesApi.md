# CitibankCommunicator.EventUpdatesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsEventUpdatesDelete**](EventUpdatesApi.md#eventsEventUpdatesDelete) | **DELETE** /events/eventUpdates | Unsubscribe user from event notification
[**eventsEventUpdatesPost**](EventUpdatesApi.md#eventsEventUpdatesPost) | **POST** /events/eventUpdates | Subscribe user to event notification


<a name="eventsEventUpdatesDelete"></a>
# **eventsEventUpdatesDelete**
> eventsEventUpdatesDelete(eventId, userId)

Unsubscribe user from event notification

Lorem Ipsum Dolor Sit Amet

### Example
```javascript
var CitibankCommunicator = require('citibank_communicator');

var apiInstance = new CitibankCommunicator.EventUpdatesApi();

var eventId = 56; // Number | The event ID

var userId = 56; // Number | The user ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsEventUpdatesDelete(eventId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| The event ID | 
 **userId** | **Number**| The user ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="eventsEventUpdatesPost"></a>
# **eventsEventUpdatesPost**
> eventsEventUpdatesPost(eventId, userId)

Subscribe user to event notification

Lorem Ipsum Dolor Sit Amet

### Example
```javascript
var CitibankCommunicator = require('citibank_communicator');

var apiInstance = new CitibankCommunicator.EventUpdatesApi();

var eventId = 56; // Number | The event ID

var userId = 56; // Number | The user ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsEventUpdatesPost(eventId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| The event ID | 
 **userId** | **Number**| The user ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

