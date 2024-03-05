const path = require("path");

// Apenas o nome do arquivo atual (Basename)
console.log(`Basename: ${path.basename(__filename)}`);

// Diretório do arquivo (Dirname)
console.log(`Dirname: ${path.dirname(__filename)}`);

// Extensão do arquivo
console.log(`Extname: ${path.extname(__filename)}`);

// Criar obj Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));
