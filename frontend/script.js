const API_URL = "http://13.53.177.185:3000/api/todos";

const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description })
  });

  form.reset();
  loadTodos();
});

async function loadTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();

  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${todo.title}</strong><br />
        <small>${todo.description}</small>
      </div>
      <div>
        <button onclick="deleteTodo(${todo.id})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadTodos();
}

// Initial load
loadTodos();
