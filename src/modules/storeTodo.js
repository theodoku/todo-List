const getTodo = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
};

const addTodo = (todo) => {
  const todos = getTodo();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodo = (index) => {
  const todos = getTodo();
  const deletedTodos = todos.filter((todo) => todo.index !== index);
  deletedTodos.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(deletedTodos));
  window.location.reload();
};

const updateTodo = (index, description) => {
  const todos = getTodo();
  const todo = todos.find((todoTask) => todoTask.index === index);
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
};

export {
  getTodo, addTodo, removeTodo, updateTodo,
};