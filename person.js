class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Olá ${this.name}, você está usando node.js!`;
  }
}

module.exports = {
  Person,
};
