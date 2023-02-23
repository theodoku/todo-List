/* eslint import/no-unresolved:0 */
import './style.css';
import addTodoItem from './modules/addTodoItem.js';

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

// const removeTodoTask = (index) => {
//   const todos = getTodoTask();
//   const deletedTodoTask = todos.filter((todo) => todo.index !== index);
//   deletedTodoTask.forEach((todo, i) => {
//     todo.index = i;
//   });
//   localStorage.setItem('todos', JSON.stringify(deletedTodoTask));
//   window.location.reload();
// };

const updateTodoTask = (index, description) => {
  const todos = getTodoTask();
  const todo = todos.find((todoTask) => todoTask.index === index);
  todo.description = description;
  localStorage.setItem('todos', JSON.stringify(todos));
};

const display = () => {
  const todos = getTodoTask();
  if (todos) {
    todos.map((todo) => addTodoTask(todo));
  }
};

display();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = getTodoTask();
  const todoInput = document.getElementById('task').value;
  const todoTask = {
    index: todos.length,
    description: todoInput,
    completed: false,
  };

  if (todoInput !== '') {
    addTodoItem(todoTask);
    addTodoTask(todoTask);
    document.getElementById('form').reset();
  }
});

const inputField = document.querySelectorAll('.description');

inputField.forEach((todo, index) => {
  todo.addEventListener('change', (e) => {
    const updateInput = e.target.value;
    const todos = getTodoTask();
    todos[index].description = updateInput;
    updateTodoTask(index, todos[index].description);
    window.location.reload();
  });
});
inputField.forEach((todo, index) => {
  todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      const todos = getTodoTask();
      todos[index].desciption = updateInput;
      updateTodoTask(index, todos[index].description);
      window.location.reload();
    }
  });
});
