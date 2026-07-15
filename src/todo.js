// Tiny toy TODO API — just enough surface for issues/PRs to reference.
const todos = [];

function addTodo(title) {
  // BUG (#tracked): no validation — empty titles get added.
  todos.push({ id: todos.length + 1, title, done: false });
  return todos[todos.length - 1];
}

function completeTodo(id) {
  const t = todos.find((x) => x.id === id);
  if (t) t.done = true;
  return t;
}

function listTodos() {
  return todos;
}

module.exports = { addTodo, completeTodo, listTodos };
