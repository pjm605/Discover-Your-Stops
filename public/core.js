var scotchTodo = angular.module('scotchTodo', []);

scotchTodo.controller('mainController', function ($scope, $http) {
 $http.get('/api/testpage')
        .success(function(data) {
        	//$scope.todos = "name"
             $scope.todos = data;
            // console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


})


// function ($scope, $http) {
//     $scope.formData = {};

//     // when landing on the page, get all todos and show them
//     $http.get('/api/testpage')
//         .success(function(data) {

//             $scope.todos = data;
//             console.log(data);
//         })
//         .error(function(data) {
//             console.log('Error: ' + data);
//         });


// }