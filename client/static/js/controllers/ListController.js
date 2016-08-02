angular.module("ListController", []).controller("ListController", function($scope, ItemFactory){
    $scope.tagline = "This is how things get done!";

    $scope.list = [];

    var getAll = function(){
        ItemFactory.getAll(function(data){
            
            $scope.list = data;
            console.log(data);
            console.log($scope.list);
        });
        
    };
    getAll();
    

    $scope.create = function(){
        ItemFactory.create($scope.new_item, function(){
            getAll();
            $scope.new_item = {};
        });
    };
    $scope.delete_item = function(id){
        ItemFactory.delete_item(id, function(){
            getAll();
        });
    };
});