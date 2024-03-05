const mongoose = require("mongoose");

const uri = `mongodb+srv://tarsobrietzkeiracet:AeUwXOIg1e6L2AtE@cursonodejs.9tmyyjo.mongodb.net/databasetarso?retryWrites=true&w=majority&appName=CursoNodeJs`;

const connectToDatabase = async () => {
  await mongoose
    .connect(uri)
    .then(() => console.log("Sucess database!"))
    .catch((err) => console.log("Erro:", err));
};

module.exports = { connectToDatabase };
