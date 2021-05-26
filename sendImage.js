const http = require('http');
const fs = require('fs');


const PORT = 3300;

const server = http.createServer((req,res)=>{
    console.log(`request was made ${req.url}`);
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type' : 'image/jpg'})
            fs.readFile("./files/photo.jpg", (err, data)=>{
                res.end(data)
            });
            
            console.log(`req was made to ${req.url}`);
            break;
    }
});

server.listen(PORT, 'localhost',()=>{
    console.log(`listnening to sever on ${PORT}`);
});