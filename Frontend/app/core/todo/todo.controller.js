// SHORTCUT: ngcontroller angular.controller
(function() {
    'use strict';

    angular
        .module('todo-app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['todoFactory','toastr'];

    /* @ngInject */
    function HomeController(todoFactory, toastr) {
        var vm = this;

        vm.cssMap = {
            3: 'panel-info',
            2: 'panel-warning',
            1: 'panel-danger'
        };

        vm.todoes = [];

        vm.sortArray = ['name', 'priority', '-priority'];

        vm.create = create;
        vm.update = update;
        vm.remove = remove;
        vm.getClass = getClass;
        vm.sortTodoes = sortTodoes;

        activate();

        // TODO: Review John Papa formatting to put functions below line break
        //////////////// There's a short cut to create a line break like this ('line-break').... might need to add files to Sublime package like I did with John Papa Angular Snippets (video in Resilio)

        function activate() {
            todoFactory
                .getAll()
                .then(function(response) {
                    vm.todoes = response.data;
                });
        }

        function create() {
            todoFactory
                .create(vm.newTodo)
                .then(function(response) {
                    vm.todoes.push(response.data);
                    vm.newTodo = {};
                    //var copy = angular.copy(vm.newTodo); // angular.copy creates clone (deep copying) of object
                    //vm.todoes.push(copy); // unshift to put at opposite side
                })
                .catch(function(error) {
                    alert('error');
                })
        }

        function update(todo) {
            todoFactory
                .update(todo.todoId, todo)
                .then(function(response) {
                    toastr.success("Save successful");
                })
                .catch(function(error) {
                    toastr.danger("Save NOT successful");
                })
        }

        function remove(todo) {
            todoFactory
                .remove(todo.todoId)
                .then(function(response) {
                    var index = vm.todoes.indexOf(todo);
                    vm.todoes.splice(index,1);
                })
                .catch(function(error) {
                    alert('error');
                })
        }

        function getClass(todo) {
            return vm.cssMap[todo.priority];
        }

        function sortTodoes(order) {
            vm.orderCategory = vm.sortArray[order];
        }

    }
})();
