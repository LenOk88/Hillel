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