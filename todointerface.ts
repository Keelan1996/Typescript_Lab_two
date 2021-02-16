// classes and interface

// mark it for export when write from seprate file
export interface todoInterface{
   
    tasks: Array<string>; // array
    addTask(task:string):number; // returns number of elements with number there
    listAllTasks():void; // returns void
    deleteTask(task:string):number

    // interface is the contract for class
}