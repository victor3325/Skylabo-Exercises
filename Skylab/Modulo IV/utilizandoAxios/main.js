axios.get('https://api.github.com/users/victor3325')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });