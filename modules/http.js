const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Bem vindo!</h1>");
  }

  if (req.url == "/users") {
    const users = [
      {
        id: 2645,
        name: "João",
        email: "joao@gmai.com",
      },
      {
        id: 6256,
        name: "Fabio",
        email: "fabio@gmai.com",
      },
      {
        id: 1262,
        name: "Carla",
        email: "carla@gmai.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta: ${port}!`));
