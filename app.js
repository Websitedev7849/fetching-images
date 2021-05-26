const fetch = require('node-fetch');

const url = 'http://localhost:3300/';

(async function(){
    try {
        fetch(url)
        .then(res => res.text())
        .then(body => console.log(body))
    } catch (err) {
        console.log("there was an error\n");
        console.log(err);
    }
})();
