// Function to add a new task
function addTask() {
    let taskTitleInput = document.getElementById("taskTitle");
    let taskDescriptionInput = document.getElementById("taskDescription");
    let taskTitle = taskTitleInput.value.trim();
    let taskDescription = taskDescriptionInput.value.trim();

    if (taskTitle !== "" && taskDescription !== "") {
        let task = {
            title: taskTitle,
            description: taskDescription,
            completed: false,
            timestamp: new Date()
        };

        tasks.push(task);
        saveTasks();
        displayTasks();
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
    } else {
        alert("Please enter both title and description!");
    }
}

// Function to display tasks
function displayTasks() {
    let pendingTasksList = document.getElementById("pendingTasks");
    let completedTasksList = document.getElementById("completedTasks");

    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");
        let title = document.createElement("h3");
        let description = document.createElement("p");
        let deleteBtn = document.createElement("button");
        let checkBtn = document.createElement("button");

        title.textContent = task.title;
        description.textContent = task.description;
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            deleteTask(index);
        });

        checkBtn.textContent = "Check";
        checkBtn.classList.add("check-btn");
        checkBtn.addEventListener("click", function() {
            toggleTask(index);
        });

        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(checkBtn);
        li.appendChild(deleteBtn);
        li.setAttribute("data-index", index);

        if (task.completed) {
            li.classList.add("completed");
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    });
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

let tasks = [];
loadTasks();
displayTasks();
