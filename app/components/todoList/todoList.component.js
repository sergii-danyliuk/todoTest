(function () {
    angular
        .module('todo.app')
        .component('todoList', {       
            // bindings: {
            // },     
            templateUrl: './app/components/todoList/todoList.view.html',
            controller: 'TodoListController as vm',      
    });

})();

