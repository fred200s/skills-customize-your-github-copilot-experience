const apiUrl = "http://127.0.0.1:8000/tasks";
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function renderTasks(tasks) {
  if (!tasks.length) {
    taskList.innerHTML = "<li>No tasks yet. Add one above.</li>";
    return;
  }

  taskList.innerHTML = tasks
    .map(
      (task) => `
        <li class="${task.completed ? "task-complete" : ""}">
          <span>${task.title}</span>
          <div class="actions">
            <button data-action="toggle">${task.completed ? "Undo" : "Complete"}</button>
            <button data-action="delete">Delete</button>
          </div>
        </li>
      `,
    )
    .join("");
}

async function loadTasks() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Unable to load tasks");
    }

    const tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    taskList.innerHTML = `<li>${error.message}</li>`;
  }
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (!title) {
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description: "", completed: false }),
    });

    if (!response.ok) {
      throw new Error("Unable to create task");
    }

    taskInput.value = "";
    await loadTasks();
  } catch (error) {
    taskList.innerHTML = `<li>${error.message}</li>`;
  }
});

taskList.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const action = button.dataset.action;
  const taskItem = button.closest("li");
  const title = taskItem?.querySelector("span")?.textContent || "";

  if (action === "delete") {
    await fetch(`${apiUrl}/${encodeURIComponent(title)}`, { method: "DELETE" });
    await loadTasks();
  }
});

loadTasks();
