//angular module
var app = angular.module('budgetSystem', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.expenses = [
	];
	$scope.addExpense = function(){
		let price = "0.00";
		let mm = 00;
		let dd = 00;
		let yyyy = 0000;
		if($scope.price.indexOf('.') == -1)
			price = '$'+$scope.price + '.00';
		else
			price = '$'+$scope.price;

		mm = $scope.date.getMonth()+1;
		dd = $scope.date.getDate()+1;
		yyyy = $scope.date.getFullYear();


		$scope.expenses.push({
			date: mm+'/'+dd+'/'+yyyy,
			category: $scope.category,
			price: price,
			location: $scope.location
		});
		$scope.date = '';
		$scope.category = '';
		$scope.price = 0.00;
		$scope.location = '';
	};
}]);