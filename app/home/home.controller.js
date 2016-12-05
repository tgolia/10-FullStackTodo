// SHORTCUT: ngcontroller angular.controller
(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
    	var vm = this;

        var cssMap = { 
            3: 'panel-info', 
            2: 'panel-warning', 
            1: 'panel-danger' 
        };

        vm.getClass = function(todo) {
            return cssMap[todo.priority];
        }

    	vm.todos = [];

        var sortArray = ['name','priority','-priority'];

        vm.sortTodos = function(order) {
            vm.orderCategory = sortArray[order];
        }


    	vm.addTodo = addTodo;

    	// TODO: Review John Papa formatting to put functions below line break
        //////////////// There's a short cut to create a line break like this ('line-break').... might need to add files to Sublime package like I did with John Papa Angular Snippets (video in Resilio)

    	function addTodo() { 
            if (vm.newTodo.priority == undefined) {
                alert("Please add a priority");  
            } else {
                var copy = angular.copy(vm.newTodo); // angular.copy creates clone (deep copying) of object
                vm.todos.push(copy); // unshift to put at opposite side
            }
    	}

    }
})();