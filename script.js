// Run when the page loads jabhi start ho
document.addEventListener("DOMContentLoaded", showTasks);

// function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput"); // get input box
    let task = taskInput.value.trim(); // get text and remove spaces

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // get tasks from localStorage
    tasks.push(task); // add new task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // save back to localStorage

    taskInput.value = ""; // clear input box
    showTasks(); // refresh task list
}

// function to display tasks
function showTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // clear current tasks

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // get tasks

    tasks.forEach((task, index) => {
        let li = document.createElement("li"); // create list item
        li.innerHTML = `${task} <button onclick="removeTask(${index})">X</button>`; // add task and delete button
        taskList.appendChild(li); // add to list
    });
}

// function to delete a task
function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // get tasks
    tasks.splice(index, 1); // remove the selected task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // save updated list
    showTasks(); // refresh task list
}
