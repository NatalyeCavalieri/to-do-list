const app = document.querySelector("#app")
const taskRow = document.querySelector("#list")
const addButton = document.querySelector("#add button")
const pageAdd = document.querySelector("#add")
const add = document.querySelector("header i")
const exit = document.querySelector("#add i")
const remove = document.querySelector(".row i")
const row = document.querySelector(".row")
const tasks = JSON.parse(localStorage.getItem("tasks")) || []

pageAdd.style.display = "none"

add.addEventListener("click", (e) => {
  e.preventDefault()
  pageAdd.style.display = "flex"
})

exit.addEventListener("click", (e) => {
  e.preventDefault()
  pageAdd.style.display = "none"
})

 function createTaskElement(task) {
   const newRowTask = document.createElement("div")
   newRowTask.classList.add("row")
   newRowTask.innerHTML = `
    <input type="checkbox">
    <p>${task.task}</p>
    <i class="ph ph-trash"></i>
  `

   newRowTask.querySelector("input").checked = task.completed

   newRowTask.querySelector("input").addEventListener("change", (e) => {
     updateTaskStatus(task.task, e.target.checked)
   })

   return newRowTask
 }
 function updateTaskStatus(taskName, completed) {
   tasks.forEach((task) => {
     if (task.task === taskName) {
       task.completed = completed
       localStorage.setItem("tasks", JSON.stringify(tasks))
     }
   })
 }

  if(tasks.length > 0 ){
    tasks.forEach((task) =>{

    const newRowTask = createTaskElement(task)
    taskRow.appendChild(newRowTask);

    const iconDelete = newRowTask.querySelector(".row i");
    iconDelete.addEventListener("click", (e) => {
      e.preventDefault();
      newRowTask.remove();

      
      const taskIndex = tasks.findIndex((t)=> t.task === task.task);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
  });
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newTask = document.querySelector("#inTask").value.trim();
  if (newTask !== "") {
    const newRowTask = document.createElement("div");
    newRowTask.classList.add("row");

    newRowTask.innerHTML = `
      <input type="checkbox">
      <p>${newTask}</p>
      <i class="ph ph-trash"></i>
    `;

    taskRow.appendChild(newRowTask);
    document.querySelector("#inTask").value = "";

    
    tasks.push({task: newTask, completed: false});
    localStorage.setItem("tasks", JSON.stringify(tasks));
    newRowTask.querySelector("input").addEventListener("change", (e) => {
      updateTaskStatus(newTask, e.target.checked)
    })

    
    const iconDelete = newRowTask.querySelector(".row i");
    iconDelete.addEventListener("click", (e) => {
      e.preventDefault();
      newRowTask.remove();

    
      const taskIndex = tasks.indexOf(newTask);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
  }
});
  
