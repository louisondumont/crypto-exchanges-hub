/*!
 * deps
 */

var ccex = require('./lib/proxy-ccex/index.js');

/*!
 * exchanges/proxy_api mapping
 */

var mapping = {
  ccex: ccex	
};

/*!
 * get the rates of all the coins listed in the given exchange
 */

function getAllRates(exchange) {
  return mapping[exchange].getAllRates();	
}

/*! 
 * exports
 */

module.exports = {
  getAllRates: getAllRates
};