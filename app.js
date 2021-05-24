const fetch = require('node-fetch');

const url = 'http://localhost:3300/get-stock';

(async function(){
    try {
        let res = await fetch(url);
        let data = await res.buffer();
        console.log(data.toString());
    } catch (err) {
        console.log("there was an error\n");
    }
})();
