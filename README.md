Team Members Contributors logs

<img width="2008" height="2128" alt="image" src="https://github.com/user-attachments/assets/552d9703-7a94-435f-ae26-9b6751354b7c" />



<img width="1570" height="2204" alt="image" src="https://github.com/user-attachments/assets/f8f88787-8943-4aa6-9125-b82b69f2bc96" />



Here — properly cleaned and formatted into a **README.md**, same structure preserved, no extra fluff:

---

````md
# Team Task Manager

Simple browser-based task manager built as a Git collaboration exercise.

## Rules

- No direct commits to `main`.
- Each feature must be developed on a separate branch.
- Every branch must be merged via a Pull Request.

## How to run

Just open `index.html` in a browser.

---

## 👤 Prem — Implement addTask() (Create Tasks)

### Goal

- Read text from input.
- Validate.
- Add to tasks array.
- Clear input.
- Re-render list.

### Step 1 – Update Local Repo & Create Branch

```sh
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-add-task
````

### Step 2 – Edit `app.js`

Replace the `addTask` function:

```js
function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (!text) {
        alert("Task cannot be empty.");
        return;
    }

    const newTask = {
        text: text,
        completed: false,
    };

    tasks.push(newTask);
    input.value = "";
    renderTasks();
}
```

### Step 3 – Quick Test

* Open `index.html` in the browser.
* Add a task → it won’t display yet (render not implemented).

### Step 4 – Commit & Push

```sh
git status
git add app.js
git commit -m "Implement addTask to create new tasks"
git config --global credential.helper store
```

#### Generate GitHub Token

1. Go to GitHub Settings → **Developer Settings → Tokens**
2. Generate new token (classic)
3. Enable:

   * `repo`
   * `workflow` (optional)
4. Copy token.

```sh
git push -u origin feature-add-task
```

Login format:

```
Username: <your GitHub username>
Password: <PASTE TOKEN HERE>
```

### Step 5 – Create Pull Request

* Compare: `feature-add-task` → `main`
* Title: **Implement addTask()**
* Merge after review.

### Step 6 – Sync After Merge

```sh
git checkout main
git pull
```

---

## 👤 Sushat Singh — Implement renderTasks() (Display Tasks)

### Goal

* Show tasks in `<ul id="taskList">`
* Mark completed tasks.
* Add delete button.
* Click text → toggle complete.
* Click delete → remove task.

### Step 1 – Checkout Main & Create Branch

```sh
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-render-tasks
```

### Step 2 – Edit `app.js`

Replace `renderTasks`:

```js
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
```

### Step 3 – Test

* Tasks now display.
* Toggle/delete still inactive.

### Step 4 – Commit & Push

```sh
git status
git add app.js
git commit -m "Implement renderTasks to display tasks with delete button"
git push -u origin feature-render-tasks
```

### Step 5 – Pull Request

* PR: `feature-render-tasks` → `main`
* Leader merges.

### Step 6 – Sync

```sh
git checkout main
git pull
```

---

## 👤 Praveen — Implement toggleTaskCompleted() (Mark Done / Undone)

### Goal

* Clicking task text toggles status.
* Re-render after toggle.

### Step 1 – Checkout & Branch

```sh
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-toggle-completed
```

### Step 2 – Edit `app.js`

Replace `toggleTaskCompleted`:

```js
function toggleTaskCompleted(index) {
    if (index < 0 || index >= tasks.length) {
        console.error("Invalid task index:", index);
        return;
    }

    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
```

### Step 3 – Test

* Click task text → toggles line-through.

### Step 4 – Commit & Push

```sh
git status
git add app.js
git commit -m "Implement toggleTaskCompleted to mark tasks done/undone"
git push -u origin feature-toggle-completed
```

### Step 5 – Pull Request

* PR: `feature-toggle-completed` → `main`
* Merge.

### Step 6 – Sync

```sh
git checkout main
git pull
```

---

## 👤 Rajat — Implement deleteTask() (Remove Tasks)

### Goal

* Delete button removes task.
* Re-render list.

### Step 1 – Branch

```sh
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-delete-task
```

### Step 2 – Edit `app.js`

Replace `deleteTask`:

```js
function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.error("Invalid task index for delete:", index);
        return;
    }

    tasks.splice(index, 1);
    renderTasks();
}
```

### Step 3 – Test

* Delete task → item removed.

### Step 4 – Commit & Push

```sh
git status
git add app.js
git commit -m "Implement deleteTask to remove tasks by index"
git push -u origin feature-delete-task
```

### Step 5 – Pull Request

* PR → `main`
* Merge.

### Step 6 – Sync

```sh
git checkout main
git pull
```

---

## 🔚 Final State (Expected Result)

After all merges:

```sh
git checkout main
git pull
```

Then open `index.html`:

* Add task → appears
* Click task → toggles completed
* Click delete → removes it

```

--- 

Done.
```
