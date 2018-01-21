var express = require('express');
var router = express.Router();

var ctrlExchange = require('../controllers/exchange.controllers.js');

// GDAX routes
router
  .route('/gdax/:productName')
  .get(ctrlExchange.getGDAX);

  router
  .route('/binance/:productName')
  .get(ctrlExchange.getBinance);

module.exports = router;
