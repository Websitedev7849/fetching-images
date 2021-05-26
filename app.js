const fetch = require('node-fetch');
const fs = require('fs');

const url = 'http://localhost:3300/';

(async function(){
    try {
        let res = await fetch(url);
        let data = await res.text();
        fs.writeFile('./files/copy_of_photo.jpg', data, (err)=>{
            (err)? console.log("some error"): console.log("no error") ; 
        })

    } catch (err) {
        console.log("there was an error\n");
        console.log(err);
    }
})();
