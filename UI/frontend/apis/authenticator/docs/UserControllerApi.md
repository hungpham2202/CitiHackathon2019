# CitibankAuthenticator.UserControllerApi

All URIs are relative to *https://localhost:5000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewUserUsingPOST**](UserControllerApi.md#createNewUserUsingPOST) | **POST** /accounts | createNewUser
[**deleteUserUsingDELETE**](UserControllerApi.md#deleteUserUsingDELETE) | **DELETE** /accounts | deleteUser
[**findUserByIdUsingGET**](UserControllerApi.md#findUserByIdUsingGET) | **GET** /accounts | findUserById
[**registerNewUserUsingPOST**](UserControllerApi.md#registerNewUserUsingPOST) | **POST** /register | registerNewUser
[**resetPasswordUsingGET**](UserControllerApi.md#resetPasswordUsingGET) | **GET** /accounts/reset-password | resetPassword
[**updateAccDetailUsingPUT**](UserControllerApi.md#updateAccDetailUsingPUT) | **PUT** /accounts | updateAccDetail
[**updateAccTypeUsingPUT**](UserControllerApi.md#updateAccTypeUsingPUT) | **PUT** /accounts/account-type | updateAccType
[**userUsingGET**](UserControllerApi.md#userUsingGET) | **GET** /accounts/me | user


<a name="createNewUserUsingPOST"></a>
# **createNewUserUsingPOST**
> User createNewUserUsingPOST(user)

createNewUser

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var user = new CitibankAuthenticator.User(); // User | user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewUserUsingPOST(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| user | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteUserUsingDELETE"></a>
# **deleteUserUsingDELETE**
> deleteUserUsingDELETE(userId)

deleteUser

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var userId = 56; // Number | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserUsingDELETE(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| userId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="findUserByIdUsingGET"></a>
# **findUserByIdUsingGET**
> User findUserByIdUsingGET(userId)

findUserById

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var userId = 56; // Number | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUserByIdUsingGET(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| userId | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="registerNewUserUsingPOST"></a>
# **registerNewUserUsingPOST**
> User registerNewUserUsingPOST(user)

registerNewUser

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var user = new CitibankAuthenticator.User(); // User | user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerNewUserUsingPOST(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| user | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="resetPasswordUsingGET"></a>
# **resetPasswordUsingGET**
> &#39;String&#39; resetPasswordUsingGET(emailAddress, userId, username)

resetPassword

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var emailAddress = "emailAddress_example"; // String | emailAddress

var userId = 56; // Number | userId

var username = "username_example"; // String | username


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resetPasswordUsingGET(emailAddress, userId, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailAddress** | **String**| emailAddress | 
 **userId** | **Number**| userId | 
 **username** | **String**| username | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateAccDetailUsingPUT"></a>
# **updateAccDetailUsingPUT**
> User updateAccDetailUsingPUT(user, userId)

updateAccDetail

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var user = new CitibankAuthenticator.User(); // User | user

var userId = 56; // Number | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAccDetailUsingPUT(user, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| user | 
 **userId** | **Number**| userId | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateAccTypeUsingPUT"></a>
# **updateAccTypeUsingPUT**
> User updateAccTypeUsingPUT(accountType, userId)

updateAccType

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var accountType = "accountType_example"; // String | accountType

var userId = 56; // Number | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAccTypeUsingPUT(accountType, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountType** | **String**| accountType | 
 **userId** | **Number**| userId | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="userUsingGET"></a>
# **userUsingGET**
> Principal userUsingGET(opts)

user

### Example
```javascript
var CitibankAuthenticator = require('citibank_authenticator');

var apiInstance = new CitibankAuthenticator.UserControllerApi();

var opts = { 
  'name': "name_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] 

### Return type

[**Principal**](Principal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

