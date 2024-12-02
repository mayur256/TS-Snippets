# Promise
- A Promise is an object representing the eventual completion or failure of an asynchronous operation.
- Essentially, a promise is a returned object from the **Promise** constructor to which you attach callbacks.
- Remember the scary days of callbacks that used to drive asynchronous code in our javascript applications.

```
function HttpRequest(url, method, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true); // true for asynchronous

    // Set up the callback function to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Call the callback with the response if successful
            callback(null, xhr.response);
        } else {
            // Call the callback with an error if the request failed
            callback(new Error(`Request failed with status: ${xhr.status}`));
        }
    };

    // Handle network errors
    xhr.onerror = function() {
        callback(new Error('Network error'));
    };

    xhr.send();
}

// Example usage:
HttpRequest('products', 'GET', function(error, response) {
    if (error) { console.error('Error:', error); }
    else {
        // nested API call to demonstrate the classic callback hell
        HttpRequest('products/productid', 'GET', function(error, response) {
          if (error) console.error('Error:', error)
          else // make another API call
        })
    }
});
```
- The classic problem of **Callback hell** encouraged us to move from a relatively better solution to handle the asynchronicity in the code which was actually realized with the help of introduction of Promises.
