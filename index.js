const readline = require("readline");
const PasswordGuesser = require("./password");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Password to find:\n", (c) => {
  let guesser = new PasswordGuesser(c);
  guesser.guess();
  rl.close();
});
