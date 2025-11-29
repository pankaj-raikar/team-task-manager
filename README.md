# Team Task Manager

Simple browser-based task manager built as a Git collaboration exercise.

## Rules

- No direct commits to `main`.
- Each feature must be developed on a separate branch.
- Every branch must be merged via a Pull Request.

## How to run

Just open `index.html` in a browser.



👤 Prem — Implement addTask() (Create Tasks)
Goal

Read text from input.

Validate.

Add to tasks array.

Clear input.

Re-render list.

Step 1 – Update Local Repo & Create Branch
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-add-task

Step 2 – Edit app.js

Replace the addTask function:

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

Step 3 – Quick Test

Open index.html in the browser (double-click or open via Live Server).

Type something in the input.

Click Add Task → nothing will show yet because renderTasks() is still not implemented. That’s fine.

Step 4 – Commit & Push
git status
git add app.js
git commit -m "Implement addTask to create new tasks"
git config --global credential.helper store

Generate Token
1. Go to: 👉 https://github.com/settings/tokens
2. Click: Generate new token (classic)
3. Name: Git CLI Access
4. Select expiry (30 days or 90 days)
5. Enable permissions:
✔ repo ✔ workflow (optional)
1. Click Generate token
2. Copy the token — you won't see it again.

git push -u origin feature-add-task

When it asks:

Username: your-username eg pankaj-raikar
Password: <PASTE TOKEN HERE>
👉 Paste the token (not your password).



Step 5 – Create Pull Request

On GitHub:

Compare: feature-add-task → main

Title: Implement addTask()

Description: “Adds function to push new tasks into tasks array.”

Create PR.

Leader (Member 1) reviews and merges.

Step 6 – Sync After Merge

After PR is merged:

git checkout main
git pull


Member 2 is done.

👤 Sushat singh — Implement renderTasks() (Display Tasks)
Goal

Show tasks in <ul id="taskList">.

Mark completed tasks using .completed class.

Each list item has:

Task text.

Delete button.

Click on text → toggles complete (calls toggleTaskCompleted).

Click delete button → deletes (calls deleteTask).


Step 1 – Checkout Main & New Branch
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-render-tasks

Step 2 – Edit app.js

Replace renderTasks:

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        // Task text span
        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        textSpan.className = "task-text";

        // Click on text toggles completion
        textSpan.addEventListener("click", () => {
            toggleTaskCompleted(index);
        });

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";

        // Clicking delete should not trigger toggle
        delBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteTask(index);
        });

        li.appendChild(textSpan);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

Step 3 – Test Locally

Open index.html.

Add a few tasks → they should now display as plain list items.

Clicking them still won’t toggle yet (Member 4’s job).

Clicking delete won’t do anything yet (Member 5’s job).

Step 4 – Commit & Push
git status
git add app.js
git commit -m "Implement renderTasks to display tasks with delete button"
git config --global credential.helper store

Generate Token
1. Go to: 👉 https://github.com/settings/tokens
2. Click: Generate new token (classic)
3. Name: Git CLI Access
4. Select expiry (30 days or 90 days)
5. Enable permissions:
✔ repo ✔ workflow (optional)
1. Click Generate token
2. Copy the token — you won't see it again.

git push -u origin feature-add-task

When it asks:

Username: your-username eg pankaj-raikar
Password: <PASTE TOKEN HERE>
👉 Paste the token (not your password).


git push -u origin feature-render-tasks

Step 5 – Pull Request

On GitHub:

PR: feature-render-tasks → main

Title: Implement renderTasks()

Leader merges.

Step 6 – Sync After Merge
git checkout main
git pull


Member 3 done.

👤 Praveen — Implement toggleTaskCompleted() (Mark Done / Undone)
Goal

Click on a task text → mark it completed / uncompleted.

Re-render list after toggle.

Step 1 – Checkout & Branch
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-toggle-completed

Step 2 – Edit app.js

Replace toggleTaskCompleted:

function toggleTaskCompleted(index) {
    if (index < 0 || index >= tasks.length) {
        console.error("Invalid task index:", index);
        return;
    }

    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

Step 3 – Test

Open index.html.

Add some tasks.

Click on the task text:

It should toggle line-through style (using .completed class).

Try multiple toggles.

Step 4 – Commit & Push
git status
git add app.js
git commit -m "Implement toggleTaskCompleted to mark tasks done/undone"

git config --global credential.helper store

Generate Token
1. Go to: 👉 https://github.com/settings/tokens
2. Click: Generate new token (classic)
3. Name: Git CLI Access
4. Select expiry (30 days or 90 days)
5. Enable permissions:
✔ repo ✔ workflow (optional)
1. Click Generate token
2. Copy the token — you won't see it again.

git push -u origin feature-add-task

When it asks:

Username: your-username eg pankaj-raikar
Password: <PASTE TOKEN HERE>
👉 Paste the token (not your password).


git push -u origin feature-toggle-completed

Step 5 – Pull Request

On GitHub:

PR: feature-toggle-completed → main

Title: Implement toggleTaskCompleted()

Leader merges.

Step 6 – Sync After Merge
git checkout main
git pull


Member 4 done.

👤 Rajat — Implement deleteTask() (Remove Tasks)
Goal

Clicking the delete button removes that task from tasks.

Re-render list.

Step 1 – Checkout & Branch
git clone https://github.com/pankaj-raikar/team-task-manager.git
cd team-task-manager
git checkout main
git pull
git checkout -b feature-delete-task

Step 2 – Edit app.js

Replace deleteTask:

function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.error("Invalid task index for delete:", index);
        return;
    }

    tasks.splice(index, 1);
    renderTasks();
}


This works with the delete button wiring Member 3 already added.

Step 3 – Test

Open index.html.

Add 3–4 tasks.

Click Delete on the middle one:

That item should disappear.

Check others still behave correctly.

Step 4 – Commit & Push
git status
git add app.js
git commit -m "Implement deleteTask to remove tasks by index"

git config --global credential.helper store

Generate Token
1. Go to: 👉 https://github.com/settings/tokens
2. Click: Generate new token (classic)
3. Name: Git CLI Access
4. Select expiry (30 days or 90 days)
5. Enable permissions:
✔ repo ✔ workflow (optional)
1. Click Generate token
2. Copy the token — you won't see it again.

git push -u origin feature-add-task

When it asks:

Username: your-username eg pankaj-raikar
Password: <PASTE TOKEN HERE>
👉 Paste the token (not your password).


git push -u origin feature-delete-task

Step 5 – Pull Request

On GitHub:

PR: feature-delete-task → main

Title: Implement deleteTask()

Leader merges.

Step 6 – Sync After Merge
git checkout main
git pull


Member 5 done.

🔚 Final State (What the App Should Do)

After all PRs are merged and everyone has pulled:

git checkout main
git pull


Open index.html:

Type a task → click Add Task → appears in list.

Click the text → toggles completed (line-through).

Click Delete → removes the task.
