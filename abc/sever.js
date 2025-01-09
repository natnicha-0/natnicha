const http =require('http');

const hostname = '127.0.0.1';
const port = 3000;
const sever = http.createSever((req,res) => {
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    //res.setHeader('Content-type','application/json');
    //res.setHeader('Content-type','application/pdf');
    //res.setHeader('Content-type'.'text/plain');
    res.write('<h1>Hello Web Programming Technology</h1>')
    res.end('Hello,World!\n');
});

sever.listen(port,hostname,() => {
    console.log('sever running at http://${hostname}:${post}');
})