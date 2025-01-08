import express from 'express';
import http from 'http';
import { Server } from 'socket.io';


const PORT = 3000;
const app = express();

const server = http.createServer(app);  // Criar o servidor HTTP
const io = new Server(server);          // Passar o servidor para o Socket.IO

// Iniciar o servidor
server.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:3000');
});