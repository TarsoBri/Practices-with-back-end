const express = require("express");
const { UserModel } = require("../src/models/user.model");

const port = 8080;
const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date().toLocaleDateString()}`);

  next();
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

// Buscar todos usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (error) {
    return;
  }
});

// Buscar usuário por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = await UserModel.find({ _id: id });
    return res.status(200).json(userId);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Inserir usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Atualizar usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }); // retorna o update já atualizado.
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Deletar usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id); // ou findByIdAndRemove(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(port, () =>
  console.log(`App iniciando em http://localhost:${port}!`)
);
