/**
 * Create a XHR Object
 *
 * @param string   method   http verb
 * @param string   url      the url to resource
 */
function createCORSRequest (method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }

    return xhr;
}

/**
 * Create params object to request
 *
 * @param string   method   http verb
 * @param string   url      the url to resource
 */
function createParams (data) {
    var params = '';

    for (key in data) {
        params = params + '&' + key + '=' + data[key];
    }

    params = params.substr(1, params.length);

    return params;
}

/**
 * Make GET requests
 *
 * @param string   url      the url to retrieve
 * @param mixed    data     data to send along with the get request [optional]
 * @param function callback function to call on successful result [optional]
 */
function getCORS (url, data, callback) {
    var xhr = createCORSRequest('GET', url);
    if (xhr) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) { return; }
            
            callback(JSON.parse(xhr.responseText), 'success');
        };
        xhr.onerror = function () {
            console.log('Woops, there was an error making the request.');
        };

        xhr.send();
    }
    else {
        console.log('CORS not supported');
        return;
    }
}

/**
 * Make POSTs requests
 *
 * @param string   url      the url to post to
 * @param mixed    data     additional data to send [optional]
 * @param function callback a function to call on success [optional]
 */
function postCORS (url, data, callback) {
    var xhr = createCORSRequest('POST', url);

    if (xhr) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) { return; }

            callback(JSON.parse(xhr.responseText), 'success');
        };
        xhr.onerror = function () {
            console.log('Woops, there was an error making the request.');
        };

        params = createParams(data);

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }
    else {
        console.log('CORS not supported');
        return;
    }
}

/**
 * Make PUTs requests
 *
 * @param string   url      the url to post to
 * @param mixed    data     additional data to send [optional]
 * @param function callback a function to call on success [optional]
 */
function putCORS (url, data, callback) {
    var xhr = createCORSRequest('PUT', url);

    if (xhr) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) { return; }

            callback(JSON.parse(xhr.responseText), 'success');
        };
        xhr.onerror = function () {
            console.log('Woops, there was an error making the request.');
        };

        params = createParams(data);

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }
    else {
        console.log('CORS not supported');
        return;
    }
}

/**
 * Make DELETEs requests
 *
 * @param string   url      the url to post to
 * @param mixed    data     additional data to send [optional]
 * @param function callback a function to call on success [optional]
 */
function deleteCORS (url, data, callback) {
    var xhr = createCORSRequest('DELETE', url);

    if (xhr) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) { return; }

            callback(JSON.parse(xhr.responseText), 'success');
        };
        xhr.onerror = function () {
            console.log('Woops, there was an error making the request.');
        };

        params = createParams(data);

        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }
    else {
        console.log('CORS not supported');
        return;
    }
}
