const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta criada com sucesso!");
});

// Inserir arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "testing.txt"),
  "Hello Node, ",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }

    console.log("Arquivo criado com sucesso!");

    // Modificar arquivo!
    fs.appendFile(
      path.join(__dirname, "/teste", "testing.txt"),
      "Hello World!",
      (error) => {
        if (error) {
          console.log("Erro:", error);
        }
        console.log("Arquivo modificado com sucesso!");

        // Ler arquivo
        fs.readFile(
          path.join(__dirname, "/teste", "testing.txt"),
          "utf8",
          (error, data) => {
            if (error) {
              console.log("Erro: ", error);
            }
            console.log("Conteúdo do arquivo: ", data);
          }
        );
      }
    );
  }
);
