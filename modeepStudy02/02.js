const todoForm = document.querySelector('.form');
const todoInput = document.querySelector('.form input');
const todoList = document.querySelector('.list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText === '') return;


    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.prepend(li);

    todoInput.value = '';
});


document.addEventListener('DOMContentLoaded', function() {
    const existingDeleteBtns = document.querySelectorAll('.delete-btn');
    existingDeleteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const li = btn.parentElement;
            todoList.removeChild(li);
        });
    });
});