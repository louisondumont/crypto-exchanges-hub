/*!
 * deps
 */

var httpromise = require('../httpromise');

/*!
 * globals
 */

var url = 'http://c-cex.com/t/prices.json';

/*!
 * @desc calls the api
 * @return [Object] rates
 */

function getAllRates() {
  return httpromise
    .get(url)
    .then(function(res) {
      return JSON.parse(res);
    });
}

/*!
 * exports
 */

module.exports = {
  getAllRates: getAllRates
}