import {todoInterface} from './todointerface';
// imports contract from interface page

class todo implements todoInterface{
         
      constructor() {}

      tasks: Array<string>=[];

      addTask(task:string): number  
      {
            this.tasks.push(task); // use this for tasks array because it's a global
            console.log("__________New task added____________");
            console.log("task " +task+ " insert in the list ");
            return this.tasks.length;
      }

      listAllTasks():void{

        console.log(" ______________Start: all items in Array: __________ ")
    
        this.tasks.forEach(function(task)
       {
    
        console.log(task);
    
       })
       console.log(" _________End: all items in Array: __________")
       
    }

    deleteTask(task:string):number{
        let index: number = this.tasks.indexOf(task); // find the index
        if(index > -1){ // indicates it is in the array when it's not -1
            this.tasks.splice(index, 1);// this removes it
    
            console.log(" task removed ")
            console.log("task " + task + " removed from list");
        }
    
        return this.tasks.length; //returns length of array
    }

    
}

    let myTodos = new todo();

    myTodos.addTask('eat');
    myTodos.addTask('sleep');

    myTodos.listAllTasks();

    myTodos.deleteTask('sleep');