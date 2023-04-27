document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});

function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
}


function handleFormSubmit(e) {
  e.preventDefault()
  // console.log(e)
  const task = e.target[0].value

  displayTask(task)

}

function displayTask(task) {
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
  taskLi.textContent = task
  taskUl.appendChild(taskLi)
}


