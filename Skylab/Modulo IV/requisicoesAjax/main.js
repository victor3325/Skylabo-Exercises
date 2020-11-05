var xhr = new XMLHttpRequest();

//requisição ajax com github
xhr.open('GET', 'https://api.github.com/users/victor3325');
xhr.send(null);

//exibir o corpo da requisição
xhr.onreadystatechange = function() {
    //quando a requisição voltar, exibir.
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}