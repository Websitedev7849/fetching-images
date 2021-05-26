const http = require('http');

const PORT = 3300;

const server = http.createServer((req,res)=>{
    console.log(`request was made ${req.url}`);
    switch (req.url) {
        case '/':
            res.end("hi wasupp?")
            console.log(`req was made to ${req.url}`);
            break;
    }
});

server.listen(PORT, 'localhost',()=>{
    console.log(`listnening to sever on ${PORT}`);
});