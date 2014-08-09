var hub = require('./index.js');

hub.getAllRates('ccex')
  .then(function(rates) {
    console.log(rates);
  });