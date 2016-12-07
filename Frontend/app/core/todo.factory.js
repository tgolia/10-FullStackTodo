(function() {
    'use strict';

    angular
        .module('todo-app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http'];

    function todoFactory($http) {
        var vm = this;
        var service = {
            create   :   create,
            getAll   :   getAll,
            getById  :   getById,
            update   :   update,
            remove   :   remove
        };


        return service;

        ///////////////////

        function create(todo) {
            // $http.post(<url>,<data>,[<options>]

            return $http.post('http://localhost:58046/api/todo',todo);
        }

        function getAll() {
            return $http.get('http://localhost:58046/api/todo');
        }


        function getById(id) {
            return $http.get('http://localhost:58046/api/todo/'+id);
        }

        function update(id, todo) {
            return $http.put('http://localhost:58046/api/todo/'+id, todo);
        }

        function remove(id) {
            return $http.delete('http://localhost:58046/api/todo/'+id); 
        }
    }
})();