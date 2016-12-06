(function() {
    'use strict';

    angular
        .module('todo-app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http'];

    function todoFactory($http) {
        var vm = this;
        var service = {
            addTodo     : addTodo,
            getTodoes   : getTodoes,
            updateTodo  : updateTodo,
            deleteTodo  : deleteTodo
        };


        return service;

        ///////////////////

        function addTodo(newTodo) {
            return $http.post('localhost:58046/api/Todo',newTodo);
        }

        function getTodoes() {
            return $http.get('http://localhost:58046/api/Todo', {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:58046/api/Todo'
                }
            });
        }

        function updateTodo(todo) {
            return $http.put('localhost:58046/api/Todo/'+todo.TodoId, todo);
        }

        function deleteTodo(todo) {
            return $http.delete('localhost:58046/api/Todo/'+todo.TodoId); 
        }
    }
})();