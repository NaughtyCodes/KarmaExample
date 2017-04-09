var app  = angular.module('calculatorApp', []);
app.controller('CalculatorController', function CalculatorController($scope) {
  $scope.z = 0;
  
  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };
  
  $scope.sub = function(){
	  $scope.z = $scope.x - $scope.y;
  };
  
});

app.controller('CustomController', function CustomController($scope) {
  $scope.a = '';
  
  $scope.getName1 = function(name) {
	  $scope.a = 'Hello '+name;
	  return $scope.a;
  };
  
    $scope.getName2 = function(name) {
	  $scope.a = 'Hello '+name;
	  $scope.a = $scope.a+" and how are you..?"
	  return $scope.a;
  };
  
  
});
