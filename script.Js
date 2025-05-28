const AddTaskButton = document.getElementById("AddTaskButton");
const NewTask = document.getElementById("NewTask");
const ProgressPercentage = document.getElementById("ProgressPercentage");
const TaskList = document.getElementById("TaskList");

let NOfElements = 0; 
let percentage = 100; 
//getting the new task 
AddTaskButton.onclick = function(){ 
//Adding the new task on the button click

    let Task = NewTask.value;
    TaskList.innerHTML = TaskList.innerHTML +"<br>"+  Task;

 //progress % 
    NOfElements = TaskList.children.length;
  
};
