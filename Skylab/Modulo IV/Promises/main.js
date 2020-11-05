var minhaPromise = function() {

    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/victor3325');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            //se retornar
            if (xhr.readyState === 4) {
                //se sucesso
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

//exibe o resultado da Promise
minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });