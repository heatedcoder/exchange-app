const request = require('request');

module.exports.getGDAX = function(req, res) {
    var productName = req.params.productName;

    request({
        url: 'https://api.gdax.com/products/'  +  productName + '/book',
        json: true,
        headers: {
            'User-Agent': 'test'
          }
    }, function(err, response, body) {
        if(response) {
            res
            .json(response);
        }
        else {
            res
            .status(500)
            .json(err);
        }
        
    });
  };

  module.exports.getBinance = function(req, res) {
    var productName = req.params.productName;

    request({
        url: `https://api.binance.com/api/v3/ticker/price?symbol=${productName}`,
        json: true
    }, function(err, response, body) {
        if(response) {
            res
            .json(response);
        }
        else {
            res
            .status(500)
            .json(err);
        }
    });
  };