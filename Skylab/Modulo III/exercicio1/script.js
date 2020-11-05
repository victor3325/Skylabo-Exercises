//declarando variaveis de seleção para lista,input e button
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//exibindo a lista
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    //criando e percorrendo a lista
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        //identificando a posição do array utilizando o indexOf
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos();

function addTodo() {
    //definindo o valor da entrada do input
    var todoText = inputElement.value;
    //atualizando a lista com o novo item
    todos.push(todoText);
    //definindo o valor do input como vazio
    inputElement.value = '';
    //renderizando a lista novamente
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

//deletando o item identificado na posição passada 'pos'
function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//salvando na storage local
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}