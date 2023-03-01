import { handleCompleted, clearAll } from "../modules/userActions";
import {
    addTodo, getTodo, removeTodo, updateTodo,
} from './modules/storeTodo.js';
import addTodoItem from './modules/addTodoItem.js'
import deleteTodo from './modules/deleteTodo.js';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM('');
global.document = dom.window.document;

// Display function
function display() {
    const todos = getTodo() || [];
    if (todos) {
      todos.map((todo) => addTodoItem(todo));
    }
  };

export default class Tasks {
    constructor() {
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
            todos[index].description = updateInput;
            updateTodo(index, todos[index].description);
          }
        });
      });
      
      window.remove = (index) => {
        deleteTodo(index);
        removeTodo(index);
      };
    } 
};

const tasks = new Tasks();
module.exports = tasks;