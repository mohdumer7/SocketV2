const express = require("express");
const app = express();
const socket = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8080);
const io = socket(expressServer);

io.on("connection", (socket) => {
  socket.emit("messageFromServer", "Hey..");
  socket.on("messageToServer", (data) => {
    console.log(data);
  });
});
