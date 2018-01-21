(function() {
    angular.module('exchangeApp')
    
    .controller('exchangeCtrl', ['$scope', 'exchangeService', '$interval', 
                                function($scope, exchangeService, $interval) {   
        
         if(!$scope.gdax) $scope.gdax = {};
         if(!$scope.gdax['btc']) $scope.gdax['btc'] = {};
         if(!$scope.gdax['eth']) $scope.gdax['eth'] = {};

         if(!$scope.binance) $scope.binance = {};
         if(!$scope.binance['btc']) $scope.binance['btc'] = {};
         if(!$scope.binance['eth']) $scope.binance['eth'] = {};


        var getRealTimeGDAX = function() {
            exchangeService.getGDAXExchangeRate('BTC', 'USD').then(function (response) {
                $scope.gdax['btc']['usd'] = response.bids[0][0];
            }, function(error) {
                
            });
    
            exchangeService.getGDAXExchangeRate('BTC', 'EUR').then(function (response) {
                $scope.gdax['btc']['eur'] = response.bids[0][0];
            }, function(error) {
                
            });
    
            exchangeService.getGDAXExchangeRate('ETH', 'USD').then(function (response) {
                $scope.gdax['eth']['usd'] = response.bids[0][0];
            }, function(error) {
                
            });
    
            exchangeService.getGDAXExchangeRate('ETH', 'EUR').then(function (response) {
                $scope.gdax['eth']['eur'] = response.bids[0][0];
            }, function(error) {
                
            });
        }
       
        var getRealTimeBinance = function() {
            exchangeService.getBinanceExchangeRate('BTC', 'USDT').then(function(response) {
                $scope.binance['btc']['usd'] = response.price;
            }, function(error) {
                
            });
    
            exchangeService.getBinanceExchangeRate('ETH', 'USDT').then(function(response) {
                $scope.binance['eth']['usd'] = response.price;
            }, function(error) {
                
            })
        }
        
        getRealTimeGDAX();
        getRealTimeBinance();
        $interval(getRealTimeGDAX, 3000);
        $interval(getRealTimeBinance, 3000);
        

    }]);
})()