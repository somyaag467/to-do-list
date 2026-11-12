// Get input and button
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");

// Get all columns
const columns = document.querySelectorAll(".column");

// Add task when button is clicked
addTaskButton.addEventListener("click", function () {

    // Get the text entered by the user
    const taskText = taskInput.value.trim();

    // Don't create an empty task
    if (taskText === "") {
        return;
    }

    // Create a new task
    const newTask = document.createElement("li");

    // Add task class
    newTask.classList.add("task");

    // Add task text
    newTask.innerText = taskText;

    // Make task draggable
    newTask.setAttribute("draggable", "true");

    // Add drag event
    newTask.addEventListener("dragstart", function () {
        newTask.classList.add("dragging");
    });

    // Remove dragging class when dragging ends
    newTask.addEventListener("dragend", function () {
        newTask.classList.remove("dragging");
    });

    // Add task to Backlog
    columns[0].appendChild(newTask);

    // Clear input
    taskInput.value = "";
});


// Add drag and drop functionality to columns

columns.forEach(function (column) {

    // Allow task to be dragged over the column
    column.addEventListener("dragover", function (event) {

        event.preventDefault();

        const draggingTask = document.querySelector(".dragging");

        column.appendChild(draggingTask);

    });

});
 