Homepage.controller('MaybeCtrl', ['$scope', function($scope){

  $scope.data = [0, 0]
  $scope.yes
  $scope.no
  $scope.show = false
  $scope.click = 0

  $scope.addData = function() {
    $scope.data[0] += $scope.yes
    $scope.data[1] += $scope.no
  }

  $scope.resetData = function() {
    $scope.yes = null
    $scope.no = null
  }

  $scope.addClick = function() {
    $scope.click++
  }

}]);