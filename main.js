$(document).ready(function() {
    
    $('form button').click(function(e) {
        e.preventDefault();

        const inputTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li class="tarefas"></li>');
        $(`
            <input type="checkbox" name="${inputTarefa}" id="${inputTarefa}">
            <label for="${inputTarefa}">${inputTarefa}</label>
        `).appendTo(novoItem);

        novoItem.appendTo('ul');
        $('#nome-tarefa').val(' ');
    });
});
