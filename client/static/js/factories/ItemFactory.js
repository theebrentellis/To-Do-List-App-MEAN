angular.module("ItemFactory", []).factory("ItemFactory", function($http){
    var factory = {};
    var list = [];

    factory.getAll = function(callback){
        $http.get("/list").success(function(output){
            list = output;
            callback(list);
        });
    };

    factory.create = function(info, callback){
        $http.post("/create", info).success(function(output){
            callback();
        });
    };

    factory.delete_item = function(id, callback){
        $http.post("/delete_item"+id).success(function(output){
            callback();
        });
    };
    return factory;
});