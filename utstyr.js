function showFirstJoke(jokes) {
    console.log("\n🔹 Første vits:");
    printJoke(jokes[0]);
  }
  
  function showAllJokes(jokes) {
    console.log("\n🔹 Alle vitser:");
    jokes.forEach(([number, text]) => {
      console.log(`\nVits ${number}:`);
      console.log(text);
    });
  }
  
  function showRandomJoke(jokes) {
    const index = Math.floor(Math.random() * jokes.length);
    console.log("\n🔹 Tilfeldig vits:");
    printJoke(jokes[index]);
  }
  
  function printJoke([number, text]) {
    console.log(`(${number}) ${text}`);
  }
  
  module.exports = {
    showFirstJoke,
    showAllJokes,
    showRandomJoke,
  };
  