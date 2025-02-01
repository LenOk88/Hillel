$(document).ready(() => {
  const taskList = $('#taskList');
  const taskInput = $('#taskInput');
  const addTaskButton = $('#addTaskButton');

  addTaskButton.on('click', () => {
    const taskText = taskInput.val().trim();
    if (taskText) {
      const newTask = $(`<li>${taskText} <button class='deleteBtn btn btn-danger'>Видалити</button></li>`);
      taskList.append(newTask);
      taskInput.val('').focus();
    }
  });

  taskList.on('click', '.deleteBtn', function () {
    $(this).closest('li').remove();
  });

  taskList.on('click', 'li', function (e) {
    if (!$(e.target).hasClass('deleteBtn')) {
      const taskText = $(this).text().replace('Видалити', '').trim();
      $('#taskText').text(taskText);
      $('#taskModal').modal('show');
    }
  });
});


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

