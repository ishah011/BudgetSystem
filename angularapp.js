//angular module
var app = angular.module('budgetSystem', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.expenses = [
		//{date: '12/17/2017 02:30 AM', category: 'Gas', price: 29.01, location: 'Shell'}
	];
	$scope.addExpense = function(){
		$scope.expenses.push({
			date: $scope.date,
			category: $scope.category,
			price: $scope.price,
			location: $scope.location
		});
		$scope.date = '01/01/2000';
		$scope.category = '';
		$scope.price = 0.00;
		$scope.location = '';
	};
}]);