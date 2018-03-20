(function() {
    'use strict';
    angular
        .module('todo.app')
        .controller('TodoListController', TodoListController);

    TodoListController.$inject = ['TodoListService'];

    function TodoListController(TodoListService) {
        var vm = this;
        var newIndex = 2;
        vm.orderType = 'id'
        vm.newTodo = {};

        vm.getTodoList = function() {
        	vm.todoList = TodoListService.getTodoList();
        };

        vm.setOrderType = function(type) {
        	vm.orderType = type;
        };

        vm.addTodo = function() {
        	if(checkNewtodo()){
        		vm.newTodo.id = newIndex++;
        		console.log('NewTodo: ', vm.newTodo);
        		TodoListService.addTodo(vm.newTodo);
        		vm.todoList = TodoListService.getTodoList();
        		console.log('TodoList: ', vm.todoList);
        		vm.newTodo = {};
        	}

        };

        vm.deleteTodo = function(todo) {
        	if(confirm('Are you shure?')){
        		TodoListService.deleteTodo(todo.id);
        		console.log('TodoList: ', vm.todoList);

        	}
        };

        function checkNewtodo(){
        	if (vm.newTodo.name && vm.newTodo.name !== '' && vm.newTodo.description && vm.newTodo.description !== '') {
        		return true;
        	} else {
        		alert('All fields are required!');
        		return false;
        	}
        }

    }

})();