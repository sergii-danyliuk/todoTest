(function(){
	angular
    .module('todo.app')
    .service('TodoListService', TodoListService);

	TodoListService.$inject = [];
    function TodoListService(){
    	var service = this;

        var todoList = [
            {
                id: 0,
                name:'Lorem',
                description: 'Lorem ipsum dolor sit.'
            },
            {
                id: 1,
                name: 'Ipsum',
                description: 'Lorem ipsum dolor sit amet.'
            }
        ]
    	
        service.getTodoList = function(){
            return todoList;
        };

        service.deleteTodo = function(id){
            for (var i = 0; i < todoList.length; i++) {
                if(todoList[i].id === id){
                    todoList.splice(i, 1);
                    break;
                }
            }
        };
        service.addTodo = function(todo){
            todoList.push(todo);
        };

    }
})();