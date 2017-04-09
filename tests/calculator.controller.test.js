describe('calculator', function () {

  beforeEach(module('calculatorApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
    it('1 + 1 should equal 2', function () {
      var $scope = {};
      var controller = $controller('CalculatorController', { $scope: $scope });
      $scope.x = 1;
      $scope.y = 2;
      $scope.sum();
      expect($scope.z).toBe(3);
    }); 

    it('z should default to zero', function () {
      var $scope = {};
      var controller = $controller('CalculatorController', { $scope: $scope });
      expect($scope.z).toBe(0);
    });
	
	it('custom test for sub with i,j,k', function() {
		var $scope = {};
		var controller = $controller('CalculatorController', {$scope:$scope});
		$scope.x = 10;
		$scope.y = 5;
		$scope.sub();
		expect($scope.z).toBe(5);		
	})
	
	it('custom test for sub with failure example', function() {
		var $scope = {};
		var controller = $controller('CalculatorController', {$scope:$scope});
		$scope.x = 8;
		$scope.y = 5;
		$scope.sub();
		expect($scope.z).toBe(5);		
	})
	
		it('custom test for string', function() {
		var $scope = {};
		var controller = $controller('CustomController', {$scope:$scope});
		console.log($scope.getName1('Mohan'));
		expect($scope.getName1('Mohan')).toBe('Hello Mohn');		
	})
	
  });

});