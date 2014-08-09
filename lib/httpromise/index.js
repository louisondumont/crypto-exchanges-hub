/*!
 * deps
 */

var http = require('http'),
    q = require('q');

/*!
 * http.get with promise
 */

function get(url) {
  var deferred = q.defer();

  http.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
    });
    
    res.on('end', function() {
      deferred.resolve(body);
    }); 
  })
  .on('error', function(e) {
      deferred.reject(e);
  });;
  return deferred.promise;
}

module.exports = {
  get: get
};