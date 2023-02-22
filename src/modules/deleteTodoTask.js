const deleteTodoTask = (index) => {
    const todoIndex = document.getElementById(index);
    todoIndex.remove();
};

export default deleteTodoTask;