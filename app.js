const fetch = require('node-fetch');

const url = 'http://localhost:3300/';

(async function(){
    try {
        let res = await fetch(url);
        let data = res.buffer();
        console.log(data);
    } catch (err) {
        console.log("there was an error\n");
        console.log(err);
    }
})();
