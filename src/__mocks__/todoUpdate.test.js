import tasks from './todoUpdate.js';
import {
    addTodo, getTodo, removeTodo, updateTodo,
} from './modules/storeTodo.js';
import addTodoItem from './modules/addTodoItem.js'
import deleteTodo from './modules/deleteTodo.js';

global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
};

it('Should call the setItem function of the localStorage object', () => {
    tasks.todos = [{ description: 'Task 1', completed: false, index: 0 }];
    global.localStorage.setItem = jest.fn();
    tasks.setlocalStorage();
    expect(global.localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify(tasks.todos));
});