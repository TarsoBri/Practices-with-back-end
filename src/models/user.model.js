const mongoose = require("mongoose");

// Definir o esquema para a coleção do mongoDB
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 7,
  },
});

// O primeiro argumento é o nome singular da coleção à qual seu modelo se destina. O Mongoose procura automaticamente a versão plural e minúscula do nome do seu modelo.

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
