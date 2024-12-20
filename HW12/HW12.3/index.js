document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
  
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class='deleteBtn'>Видалити</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
      }
    });
  
    taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('deleteBtn')) {
        const li = event.target.closest('li');
        li.remove();
      }
    });
  });
  