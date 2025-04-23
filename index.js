const readline = require("readline");
const { fetchJokes } = require("./jokeLoader");
const { parseJokes } = require("./jokeParser");
const showMenu = require("./menu");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Velg hvilken JSON-fil du vil bruke:");
console.log("1. justJokes.json");
console.log("2. jokes.json");

rl.question("Skriv 1 eller 2: ", async (valg) => {
  let url;
  if (valg === "1") {
    url = "https://terjetheteacher.github.io/some-jokes/justJokes.json";
  } else if (valg === "2") {
    url = "https://terjetheteacher.github.io/some-jokes/jokes.json";
  } else {
    console.log("Ugyldig valg.");
    rl.close();
    return;
  }

  const rawData = await fetchJokes(url);
  const jokes = parseJokes(rawData);

  if (!jokes || jokes.length === 0) {
    console.log("Ingen vitser ble funnet.");
    rl.close();
    return;
  }

  rl.close();
  showMenu(jokes);
});
