# CitibankCommunicator.UpcomingEventSubscriptionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsUpcomingEventSubscriptionDelete**](UpcomingEventSubscriptionApi.md#eventsUpcomingEventSubscriptionDelete) | **DELETE** /events/upcomingEventSubscription | Unsubscribe user from event notification
[**eventsUpcomingEventSubscriptionPost**](UpcomingEventSubscriptionApi.md#eventsUpcomingEventSubscriptionPost) | **POST** /events/upcomingEventSubscription | Subscribe user to event notification


<a name="eventsUpcomingEventSubscriptionDelete"></a>
# **eventsUpcomingEventSubscriptionDelete**
> eventsUpcomingEventSubscriptionDelete(eventId, userId)

Unsubscribe user from event notification

Lorem Ipsum Dolor Sit Amet

### Example
```javascript
var CitibankCommunicator = require('citibank_communicator');

var apiInstance = new CitibankCommunicator.UpcomingEventSubscriptionApi();

var eventId = 56; // Number | The event ID

var userId = 56; // Number | The user ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsUpcomingEventSubscriptionDelete(eventId, userId, callback);
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

<a name="eventsUpcomingEventSubscriptionPost"></a>
# **eventsUpcomingEventSubscriptionPost**
> eventsUpcomingEventSubscriptionPost(eventId, userId)

Subscribe user to event notification

Lorem Ipsum Dolor Sit Amet

### Example
```javascript
var CitibankCommunicator = require('citibank_communicator');

var apiInstance = new CitibankCommunicator.UpcomingEventSubscriptionApi();

var eventId = 56; // Number | The event ID

var userId = 56; // Number | The user ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsUpcomingEventSubscriptionPost(eventId, userId, callback);
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

