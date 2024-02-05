    const express=require('express');
    const app=express();
    const Server=require('socket.io');
    const http=require('http');
    const server=http.createServer(app);
    const io=Server(server);             
    app.set('view engine','ejs');

    app.get('/',(req,resp)=>{
    
        resp.render('Home');
    });

    io.on("connection",(socket)=>{       
        socket.on('chat',(obj)=>{
            socket.broadcast.emit('message',obj);
        })
    });

    server.listen(5000);
