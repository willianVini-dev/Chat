import express from 'express';
import http from 'http';
import { Server } from 'socket.io';


const PORT = 3000;
const app = express();

const server = http.createServer(app);  // Criar o servidor HTTP
const io = new Server(server, { cors: { origin: 'http://localhost:5173' } });

io.on('connection', (socket) => {
  console.log('Usuário conectado', socket.id);

  socket.on('disconnect', () => {
    console.log('Usuário desconectado', socket.id);
  });

  socket.on('set_username', (username) => {
    socket.data.username = username;

  });

  socket.on('send_message', (message) => {
    io.emit('receive_message', { message, username: socket.data.username, authorId: socket.id });
  });
})

// Iniciar o servidor
server.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});