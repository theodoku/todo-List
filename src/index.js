import './style.css';
import addTodoItem from './modules/addTodoItem.js';
import deleteTodo from './modules/deleteTodo.js';
import handleCompleted from './modules/handleCompleted.js';
import {
  addTodo, getTodo, removeTodo, updateTodo,
} from './modules/storeTodo.js';

const display = () => {
  const todos = getTodo() || [];
  if (todos) {
    todos.map((todo) => addTodoItem(todo));
  }
};

display();
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = getTodo();
  const todoInput = document.getElementById('task').value;
  const todoTask = {
    index: todos.length,
    description: todoInput,
    completed: false,
  };

  if (todoInput !== '') {
    addTodoItem(todoTask);
    addTodo(todoTask);
    document.getElementById('form').reset();
  }
});

const inputField = document.querySelectorAll('.description');

inputField.forEach((todo, index) => {
  todo.addEventListener('change', (e) => {
    const updateInput = e.target.value;
    const todos = getTodo();
    todos[index].description = updateInput;
    updateTodo(index, todos[index].description);
    window.location.reload();
  });
});
inputField.forEach((todo, index) => {
  todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const updateInput = e.target.value;
      const todos = getTodo();
      todos[index].desciption = updateInput;
      updateTodo(index, todos[index].description);
      window.location.reload();
    }
  });
});

window.remove = (index) => {
  deleteTodo(index);
  removeTodo(index);
};

window.completedTodo = (index) => {
  handleCompleted(index);
};

document.getElementById('allCompleted').addEventListener('click', () => {
  const todos = getTodo();
  const allCompleted = todos.filter((todo) => !todo.completed);
  allCompleted.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(allCompleted));
  window.location.reload();
});
