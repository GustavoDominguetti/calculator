angular.module('app').controller('calculadora', function($scope){
	$scope.valTotal;
	$scope.total = 0;
	$scope.buttons = [7, 8, 9, 'ON', 'OFF', 4, 5, 6, '+', '-', 1, 2, 3, 'x', '/', 0, '.', '%', '=', ''];

	$scope.set = function(index) {
		if(index ) $scope.valTotal += parseInt($scope.buttons[index]);
		else
			$scope.valTotal += $scope.buttons[index];

		$scope.total = 	
		//console.log(typeof($scope.valTotal));
	};

});
