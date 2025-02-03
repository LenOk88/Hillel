document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskTextModal = document.getElementById('taskText');
  const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));

  addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.innerHTML = `${taskText} <button class="deleteBtn btn btn-danger btn-sm float-end">Удалить</button>`;
      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.focus();
    }
  });

  taskList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('deleteBtn')) {
      target.closest('li').remove();
    }
    else if (target.tagName === 'LI') {
      const taskText = target.firstChild.textContent.trim();
      taskTextModal.textContent = taskText;
      taskModal.show();
    }
  });
});
