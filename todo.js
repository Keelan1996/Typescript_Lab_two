"use strict";
exports.__esModule = true;
// imports contract from interface page
var todo = /** @class */ (function () {
    function todo() {
        this.tasks = [];
    }
    todo.prototype.addTask = function (task) {
        this.tasks.push(task); // use this for tasks array because it's a global
        console.log("__________New task added____________");
        console.log("task " + task + " insert in the list ");
        return this.tasks.length;
    };
    todo.prototype.listAllTasks = function () {
        console.log(" ______________Start: all items in Array: __________ ");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log(" _________End: all items in Array: __________");
    };
    todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task); // find the index
        if (index > -1) { // indicates it is in the array when it's not -1
            this.tasks.splice(index, 1); // this removes it
            console.log(" task removed ");
            console.log("task " + task + " removed from list");
        }
        return this.tasks.length; //returns length of array
    };
    return todo;
}());
var myTodos = new todo();
myTodos.addTask('eat');
myTodos.addTask('sleep');
myTodos.listAllTasks();
myTodos.deleteTask('sleep');
