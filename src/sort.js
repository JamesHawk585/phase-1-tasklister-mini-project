

// The DOMContentLoaded event listener is used to ensure that the DOM has loaded before attaching event listeners to the form.

document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners() 
});

let taskObjArr = []


// The addingEventListeners() function adds an event listener to the "submit" event of a form element in the HTML document with the ID "create-task-form". When the form is submitted, the handleFormSubmit() function is called to handle the form data and display the task on the page.

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
    document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

// The handleFormSubmit() function prevents the default form submission behavior and retrieves the task and priority level entered by the user. It then calls the displayTask() function, which creates a new task list item and adds it to the taskUl unordered list.

function handleFormSubmit(e) {
  e.preventDefault()
  console.log(e)
  const task = e.target[0].value
  const priorityLevel = parseInt(e.target.priority.value)
  
  const taskObj = {task, priorityLevel}
  taskObjArr.push(taskObj)

  console.log(taskObjArr)

  sortTasks()
  // displayTask(task, priorityLevel)
}

// The displayTask() function creates a new task list item and adds it to the task list in the HTML document

function displayTask(task, priorityLevel) {
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)
  taskLi.textContent = task + " "
  taskLi.style.color = getPriorityColor(priorityLevel)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}


// The deleteTask() function removes the task list item when the user clicks on the delete button.

function deleteTask(e) {
  console.log(e)
  e.target.parentNode.remove()
}


// The getPriorityColor() function returns the color associated with the priority level selected by the user. It uses a switch case to determine the color based on the priority level.

function getPriorityColor(priorityLevel) {
  switch (priorityLevel) {
    case 1:
      return "red"
    case 2:
      return "blue"
    case 3:
      return "green"
    default:
      return "black"
  }
}


function sortTasks() {
  console.log("in sortTasks")
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
    taskObjArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
    taskObjArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
  // displayTasks()

}