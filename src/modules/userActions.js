import { getTodo } from './storeTodo.js';

// Mark Todo As Completed
const handleCompleted = (index) => {
  const completed = document.getElementById(`check${index}`).toggleAttribute('checked');
  const todos = getTodo();

  todos[index].completed = completed;
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Clear All Completed Todo
const clearAll = document.getElementById('allCompleted').addEventListener('click', () => {
  const todos = getTodo();
  const allCompleted = todos.filter((todo) => !todo.completed);
  allCompleted.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todos', JSON.stringify(allCompleted));
  window.location.reload();
});

export { handleCompleted, clearAll };