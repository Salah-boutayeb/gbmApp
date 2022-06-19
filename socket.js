const app = require("express")();
const appWs = require("express-ws")(app);
var id = null;
app.ws("/", (ws, req) => {
  console.log("connected");

  ws.on("message", (msg) => {
    console.log(msg);
    if (msg == "id") {
      ws.send(id);
    } else if (msg.split(",").length == 5) {
      console.log(msg);
      ws.send("thank u");
    } else if (msg.split(":").length == 2) {
      id = msg.split(":")[1];
      console.log(id);
    }

    /* appWs.getWss().clients.forEach((client) => {
      client.send("data");
    }); */
  });
});

app.listen(1337, () => console.log("Server has been started"));
