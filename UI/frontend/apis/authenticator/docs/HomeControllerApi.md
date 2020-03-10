# CitibankAuthenticator.HomeControllerApi

All URIs are relative to *https://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**helloWorldUsingGET**](HomeControllerApi.md#helloWorldUsingGET) | **GET** /v1/ping | helloWorld


<a name="helloWorldUsingGET"></a>
# **helloWorldUsingGET**
> &#39;String&#39; helloWorldUsingGET()

helloWorld

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.HomeControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.helloWorldUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

