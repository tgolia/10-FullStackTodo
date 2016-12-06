// SHORTCUT: ngcontroller angular.controller
(function() {
    'use strict';

    angular
        .module('todo-app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['todoFactory'];

    /* @ngInject */
    function HomeController(todoFactory) {
    	var vm = this;

        vm.cssMap = { 
            3: 'panel-info', 
            2: 'panel-warning', 
            1: 'panel-danger' 
        };

    	vm.todoes = [];

        vm.sortArray = ['name','priority','-priority'];

        vm.getTodoes = getTodoes;
        vm.getClass = getClass;
        vm.sortTodoes = sortTodoes;

    	// TODO: Review John Papa formatting to put functions below line break
        //////////////// There's a short cut to create a line break like this ('line-break').... might need to add files to Sublime package like I did with John Papa Angular Snippets (video in Resilio)

    	function getTodoes() { 
            todoFactory
                .getTodoes()
                .then(function(response) {
                    //var copy = angular.copy(vm.newTodo); // angular.copy creates clone (deep copying) of object
                    //vm.todoes.push(copy); // unshift to put at opposite side
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