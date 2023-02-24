const list = document.getElementById('lists');
const addTodoItem = (todo) => {
  list.innerHTML += `
    <li id="${todo.index}" class="listTask" completed="${false}">
      <div class="listTaskWrapper"><input type="checkbox" name="" class="checkbox" id=check${todo.index} onclick="completedTodo(${todo.index})" ${todo.completed ? 'checked' : ''}></div>
      <input type="text" value="${todo.description}" class="description">
      <button type="button" class="todoBtn" onclick="remove(${todo.index})">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/></svg>
      </button>
    </li>
  `;
};

export default addTodoItem;
