# CitibankCommunicator.FullSubscriptionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsFullSubscriptionDelete**](FullSubscriptionApi.md#eventsFullSubscriptionDelete) | **DELETE** /events/fullSubscription | Unsubscribe user from event notification
[**eventsFullSubscriptionPost**](FullSubscriptionApi.md#eventsFullSubscriptionPost) | **POST** /events/fullSubscription | Subscribe user to event notification


<a name="eventsFullSubscriptionDelete"></a>
# **eventsFullSubscriptionDelete**
> eventsFullSubscriptionDelete(eventId, userId)

Unsubscribe user from event notification

Lorem Ipsum Dolor Sit Amet

### Example
```javascript
var CitibankCommunicator = require('citibank_communicator');

var apiInstance = new CitibankCommunicator.FullSubscriptionApi();

var eventId = 56; // Number | The event ID

var userId = 56; // Number | The user ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsFullSubscriptionDelete(eventId, userId, callback);
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

<a name="eventsFullSubscriptionPost"></a>
# **eventsFullSubscriptionPost**
> eventsFullSubscriptionPost(eventId, userId)

Subscribe user to event notification

Lorem Ipsum Dolor Sit Amet

### Example
```javascript
var CitibankCommunicator = require('citibank_communicator');

var apiInstance = new CitibankCommunicator.FullSubscriptionApi();

var eventId = 56; // Number | The event ID

var userId = 56; // Number | The user ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsFullSubscriptionPost(eventId, userId, callback);
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

