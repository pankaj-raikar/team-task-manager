// Shared state: one array all members work with
let tasks = [];

console.log("Welcome to the Team Task Manager project.. All changes must go through branches and PRs.");


// MEMBER 1: will add a welcome log via a feature branch
console.log("Team Task Manager app loaded.");

// MEMBER 2: implement addTask()
function addTask() {
    /* TODO: Member 2 */
}

// MEMBER 3: implement renderTasks()
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        textSpan.className = "task-text";

        textSpan.addEventListener("click", () => {
            toggleTaskCompleted(index);
        });

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";

        delBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteTask(index);
        });

        li.appendChild(textSpan);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}
// MEMBER 4: implement toggleTaskCompleted()
function toggleTaskCompleted(index) {
    if (index < 0 || index >= tasks.length) {
        console.error("Invalid task index:", index);
        return;
    }

    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// MEMBER 5: implement deleteTask()
function deleteTask(index) {
    /* TODO: Member 5 */
}

// Bind Add button
document.getElementById("addTaskBtn").addEventListener("click", addTask);

