const express=require('express');

const app=express();
const Server=require('socket.io');
const http=require('http');

const server=http.createServer(app);
const io=Server(server);
app.set('view engine','ejs');

app.get('/',(req,resp)=>{
    resp.render('Example');
});

//Socket se related work handle here
io.on("connection",(socket)=>{       // io reprsents all sockets n clients
  //  console.log(socket.id);
    socket.on('chat',(input)=>{
        socket.broadcast.emit('message',input);
    })
});

server.listen(5000);
