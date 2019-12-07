let createTaskInputField = document.getElementById("createTaskInput");
let submitTask = document.getElementById("submitTask");
let tasklistItems = document.getElementById("items");
let dueDateInput = document.getElementById("dueDateInput")
let taskListContainer = document.querySelector(".taskList")

taskArr = []

// sort tasks
let sortable = Sortable.create(tasklistItems);



// Create task
submitTask.addEventListener("click", function (event) {
  let newTask = createTaskInputField.value;
  let addTaskToList = document.querySelector(".taskList");
  let setDuedate = dueDateInput.value
  if (dueDateInput.value == "") {
    setDuedate = "Someday"
  }


  if (createTaskInputField.value != "") {
    // let addTaskToList = document.querySelector(".list-group-item-action");
    let insertTaskHtml = `<li class="list-group-item taskCounter list-group-item-action d-flex align-items-center justify-content-between">
  <span class="item-text">${newTask}</span> 
  <span class="dueDate">Due date: ${setDuedate}</span>

 
  <div>
 
    <button type="button" id="edit-button"  class="btn btn-secondary edit-btn btn-sm justify-content-between">Edit task </button>
    <button type="button" class="btn btn-outline-danger btn-sm delete-btn justify-content-between">Delete task </button>
    
  </div>
</li>`;

    addTaskToList.insertAdjacentHTML("afterbegin", insertTaskHtml);
    createTaskInputField.value = "";
    taskArr.push(newTask)
    createTaskInputField.focus();
    taskCounter();
    checkForTasks();
 
   
  } else {
    alert("Enter a task first!");
  }
});





// edit task
let updateTaskInput = document.getElementById("updateTaskInput");

document.querySelector("#items").addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    taskModal();

    // grab the original task value
    let editTask = e.target.parentElement.parentElement.querySelector(
      ".item-text"
    ).innerHTML;

    // save the new input value in a variable
    let updateTaskBtn = document.getElementById("updateTask");



    function closeTaskModal() {
      e.target.parentElement.parentElement.querySelectorAll(
        ".item-text"
      )[0].innerHTML = updateTaskInput.value;
      modalContainer.style.display = "none";
      removeEditTaskListener()
    }

    function removeEditTaskListener() {
      updateTaskBtn.removeEventListener('click', closeTaskModal)
    }

    updateTaskBtn.addEventListener('click', closeTaskModal)
  }
});



// delete task
document.querySelector("#items").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let updatedTask = e.target.parentElement.parentElement.querySelector(
      ".item-text"
    ).innerText;
    if ((taskUpdate = confirm("Do you want to delete this task permanently??")))
      e.target.parentElement.parentElement.remove();
    taskCounter();
    checkIfNoTasks()
    
    
  }
});

function taskCounter() {
  let taskCounter = document.querySelectorAll(".taskCounter");
  let taskcountSpan = document.querySelector(".taskcountSpan");
  taskcountSpan.innerHTML = taskCounter.length;

  


}



function checkIfNoTasks(){
  let taskCounter = document.querySelectorAll(".taskCounter");

  let thingsToDoTitle = document.querySelector('h2.container')
  let allDoneImg = document.querySelector('.allDoneImg')
  let noTasksLeft = document.querySelector('.noTasksLeft')
  if(taskCounter.length == 0){
    thingsToDoTitle.innerHTML = "You are all done for now, why not add some tasks?"
  
    allDoneImg.style.display= "block"
}}

function checkForTasks(){
  let taskCounter = document.querySelectorAll(".taskCounter");

  let thingsToDoTitle = document.querySelector('h2.container')
  let allDoneImg = document.querySelector('.allDoneImg')
  let noTasksLeft = document.querySelector('.noTasksLeft')
  
  if(taskCounter.length >= 1){
    thingsToDoTitle.innerHTML = "Things to do"
    allDoneImg.style.display= "none"
  } 
  
  
  }


let modalContainer = document.getElementById("modalContainer");

function taskModal() {
  modalContainer.style.display = "block";
}

let closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

flatpickr("#dueDateInput", {
  enableTime: false,
  dateFormat: "d-m-Y",
  altInput: true,
  altFormat: "F j, Y",
  weekNumbers: true,
  minDate: "today"


});

// DARKMODE
let jumbotron = document.querySelector(".jumbotron")
let switchColors = document.getElementById('switchColors')
let modalContent = document.querySelector('.modalContent')


switchColors.addEventListener('click', function(){
  enableDarkMode()
})

function enableDarkMode(){

document.body.style.backgroundColor = "#101518"
document.body.style.color = "#aeaeae"
jumbotron.classList.add("jumbotronBlack")
modalContent.style.backgroundColor = "#101518"

document.querySelectorAll('input').forEach( input => {
  input.style.backgroundColor = "#101518"
});




document.querySelectorAll("li.list-group-item.taskCounter.list-group-item-action.d-flex.align-items-center.justify-content-between").forEach( listGroup => {
  listGroup.style.backgroundColor = "#101518"
  listGroup.style.border = "1px solid lightgray"
});

}


