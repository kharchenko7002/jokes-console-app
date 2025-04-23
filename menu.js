const readline = require("readline");
const { showAllJokes, showFirstJoke, showRandomJoke } = require("./jokes");

function showMenu(jokes) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function menu() {
    console.log("\n🃏 Meny:");
    console.log("1. Vis første vits");
    console.log("2. Vis alle vitser");
    console.log("3. Vis en tilfeldig vits");
    console.log("4. Avslutt");

    rl.question("Velg et alternativ (1-4): ", (answer) => {
      switch (answer) {
        case "1":
          showFirstJoke(jokes);
          break;
        case "2":
          showAllJokes(jokes);
          break;
        case "3":
          showRandomJoke(jokes);
          break;
        case "4":
          rl.close();
          return;
        default:
          console.log("Ugyldig valg.");
      }
      menu();
    });
  }

  menu();
}

module.exports = showMenu;
