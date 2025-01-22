    $('#todoList').on('click', 'li', function() {
        let task = $(this).data('task');
        $('#taskDetails').text(task);
    });
