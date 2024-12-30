const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

const STORAGE_KEY = 'todos';

const loadTodos = () => {
    const todos = localStorage.getItem(STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const renderTodos = () => {
    const todos = loadTodos();
    
    while (todosWrapper.firstChild) {
        todosWrapper.removeChild(todosWrapper.firstChild);
    }

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'todo-item--checked' : ''}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleComplete(index));

        const span = document.createElement('span');
        span.className = 'todo-item__description';
        span.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'todo-item__delete';
        deleteBtn.textContent = 'Видалити';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todosWrapper.appendChild(li);
    });
};

const addTodo = (text) => {
    const todos = loadTodos();
    todos.push({ text, completed: false });
    saveTodos(todos);
    renderTodos();
};

const deleteTodo = (index) => {
    const todos = loadTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
};

const toggleComplete = (index) => {
    const todos = loadTodos();
    todos[index].completed = !todos[index].completed;
    saveTodos(todos);
    renderTodos();
};

window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
        renderTodos();
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = '';
    }
});

renderTodos();
