const http = require("http");
const socketio = require("socket.io");

const server = http.createServer((res, req) => {
  req.end(" I am Connected..!! ");
});

const io = socketio(server);

io.on("connection", (socket, req) => {
  socket.emit("welcome", "Welcome to the Socket");
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
