# CitibankReporting.DefaultApi

All URIs are relative to *https://localhosthttp://localhost:8081/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDemographicApi**](DefaultApi.md#getDemographicApi) | **GET** /reports/demographic | 
[**getHistoricalApi**](DefaultApi.md#getHistoricalApi) | **GET** /reports/historical | 
[**getOrganizationApi**](DefaultApi.md#getOrganizationApi) | **GET** /reports/organization | 
[**getUserHistoricalApi**](DefaultApi.md#getUserHistoricalApi) | **GET** /reports/user-historical | 


<a name="getDemographicApi"></a>
# **getDemographicApi**
> getDemographicApi(eventId)



### Example
```javascript
var CitibankReporting = require('citibank_reporting');

var apiInstance = new CitibankReporting.DefaultApi();

var eventId = "eventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDemographicApi(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getHistoricalApi"></a>
# **getHistoricalApi**
> getHistoricalApi(opts)



### Example
```javascript
var CitibankReporting = require('citibank_reporting');

var apiInstance = new CitibankReporting.DefaultApi();

var opts = { 
  'fromDate': "fromDate_example", // String | 
  'toDate': "toDate_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHistoricalApi(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromDate** | **String**|  | [optional] 
 **toDate** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationApi"></a>
# **getOrganizationApi**
> getOrganizationApi(organizerName)



### Example
```javascript
var CitibankReporting = require('citibank_reporting');

var apiInstance = new CitibankReporting.DefaultApi();

var organizerName = "organizerName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getOrganizationApi(organizerName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizerName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserHistoricalApi"></a>
# **getUserHistoricalApi**
> getUserHistoricalApi(userId, opts)



### Example
```javascript
var CitibankReporting = require('citibank_reporting');

var apiInstance = new CitibankReporting.DefaultApi();

var userId = "userId_example"; // String | 

var opts = { 
  'fromDate': "fromDate_example", // String | 
  'toDate': "toDate_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getUserHistoricalApi(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **fromDate** | **String**|  | [optional] 
 **toDate** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

