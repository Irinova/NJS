import express, { Express } from "express";
import User from "./modules/user/user";
import Books from "./modules/books/books";
const http = require('http');
import Screens from "./modules/screens/screens";
const socketIO = require('socket.io');

const mongoose = require("mongoose");

const app: Express = express();
const port = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;

let client;

const server = http.Server(app);
const io = socketIO(server);

const initializeMongoDB = async () => {
  try {
    client = await mongoose.connect(MONGODB_URL);
  } catch (e) {
    console.error(e);
  }
};

initializeMongoDB().then(() => {
  app.use(express.json());
  app.set("view engine", "ejs");
  app.use(express.urlencoded());
  app.use("/public", express.static(__dirname + "/public"));

  const user = new User(app);
  const books = new Books(app, user.currentUser, client);
  const screens = new Screens(app, user, books.controller.booksModel);
  io.on('connection', (socket) => {
    const {id} = socket;
    console.log(`Socket connected: ${id}`);

    // сообщение себе
    socket.on('message-to-me', (msg) => {
        msg.type = 'me';
        socket.emit('message-to-me', msg);
    });

    // сообщение для всех
    socket.on('message-to-all', (msg) => {
        msg.type = 'all';
        socket.broadcast.emit('message-to-all', msg);
        socket.emit('message-to-all', msg);
    });

    // работа с комнатами
    const {roomName} = socket.handshake.query;
    console.log(`Socket roomName: ${roomName}`);
    socket.join(roomName);
    socket.on('message-to-room', (msg) => {
        msg.type = `room: ${roomName}`;
        socket.to(roomName).emit('message-to-room', msg);
        socket.emit('message-to-room', msg);
    });

    socket.on('disconnect', () => {
        console.log(`Socket disconnected: ${id}`);
    });
});
});

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
