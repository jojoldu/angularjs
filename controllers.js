var app = angular.module('app',[]);

app.controller('MainCtrl', function($scope){
	$scope.bill = {};

	$scope.items = [{ title : '페인트 그릇', quantity : 8, price : 3.95}, 
					{ title : '땡땡이 리본', quantity : 17, price : 12.95},
					{ title : '공깃돌', quantity : 5, price : 6.95}];

	var calculateTotals = function(){
		var total = 0;
		var obj;

		for(var i=0, len = $scope.items.length; i<len; i++){
			obj = $scope.items[i];
			total = total + obj.price * obj.quantity;
		}

		$scope.bill.total = total;
		$scope.bill.discount = total > 100 ? 10 : 0;
		$scope.bill.subtotal = total - $scope.bill.discount;
	}

	$scope.$watch('items', calculateTotals(), true);

});