const getTodoTask = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  return todos;
};

const addTodoTask = (todo) => {
  const todos = getTodoTask();
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const removeTodoTask = (index) => {
  const todos = getTodoTask();
  const deletedTodoTask = todos.filter((todo) => todo.index !== index);
  deletedTodoTask.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(deletedTodoTask));
  window.location.reload();
};

const updateTodoTask = (index, description) => {
  const todos = getTodoTask();
  const todo = todos.find((todoTask) => todoTask.Index === index);
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
};

export {
  getTodoTask, addTodoTask, removeTodoTask, updateTodoTask,
};