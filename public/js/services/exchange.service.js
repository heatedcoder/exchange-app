(function() {
    angular.module('exchangeApp').
    
    service('exchangeService', ['$http', '$q', function($http, $q) {
        return {
            getGDAXExchangeRate: getGDAXExchangeRate,
            getBinanceExchangeRate: getBinanceExchangeRate
        }
        function getGDAXExchangeRate(fromCurr, toCurr) {
            var deferred = $q.defer();
            var productName = `${fromCurr}-${toCurr}`;
            $http({
                method: 'GET',
                url: `/api/gdax/${productName}`
            }).then(function(response) {
                if(response && response.data && response.data.statusCode==200) {
                    deferred.resolve(response.data.body);
                }
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
        
        function getBinanceExchangeRate(fromCurr, toCurr) {
            var deferred = $q.defer();
            var productName = `${fromCurr}${toCurr}`;
            $http({
                method: 'GET',
                url: `/api/binance/${productName}`
            }).then(function(response) {
                if(response && response.data && response.data.statusCode==200) {
                    deferred.resolve(response.data.body);
                }
                deferred.reject("Error");
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
        
    }]);
})()

