const form = document.getElementById("todo-form");
const input = document.getElementById("task-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create elements
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  span.textContent = taskText;
  span.classList.add("task-text");

  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("delete-btn");

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // Clear input
  input.value = "";

  // Mark as done
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.classList.add("done");
    } else {
      span.classList.remove("done");
    }
  });

  // Delete task
  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
  });
});
