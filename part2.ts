// functions examples

let tasks: string[]= [];

function addTask(task:string): number  
{
      tasks.push(task);
      console.log("__________New task added____________");
      console.log("task " +task+ " insert in the list ");
      return tasks.length;
}

function listAllTasks():void{

    console.log(" ______________Start: all items in Array: __________ ")

    tasks.forEach(function(task)
   {

    console.log(task);

   })
   console.log(" _________End: all items in Array: __________")
   
}

function deleteTask(task:string):number{
    let index: number = tasks.indexOf(task); // find the index
    if(index > -1){ // indicates it is in the array when it's not -1
        tasks.splice(index, 1);// this removes it

        console.log(" task removed ")
        console.log("task " + task+ " removed from list");
    }

    return tasks.length; //returns length of array
}

addTask('wake up');
addTask('sleep');

listAllTasks();

deleteTask('sleep');