/* eslint import/no-unresolved:0 */
import './style.css';
import addTodoItem from './modules/addTodoItem.js';
import { getTodoTask, addTodoTask, updateTodoTask } from './.modules/storeTodoTask.js';

const display = () => {
  const todos = getTodoTask || [];
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
    desciption: todoInput,
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
    todos[index].desciption = updateInput;
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
