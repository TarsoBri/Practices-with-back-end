const { Person } = require("./person");

require("dotenv").config();
const { connectToDatabase } = require("./src/database/connect");

connectToDatabase();

require("./modules/express");

// ----------------------------------------------- //

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
const person = new Person("Tarso");

console.log(person.sayMyName());
