
axios.get('https://api.github.com/users/caiostalberg')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
