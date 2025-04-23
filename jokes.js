function showAllJokes(jokes) {
  jokes.forEach((j, i) => console.log(`\n${i + 1}. ${j}`));
}

function showFirstJoke(jokes) {
  console.log(jokes.length > 0 ? `\nFørste vits: ${jokes[0]}` : "Ingen vitser tilgjengelig.");
}

function showRandomJoke(jokes) {
  if (jokes.length > 0) {
    const i = Math.floor(Math.random() * jokes.length);
    console.log(`\nTilfeldig vits: ${jokes[i]}`);
  } else {
    console.log("Ingen vitser tilgjengelig.");
  }
}

module.exports = { showAllJokes, showFirstJoke, showRandomJoke };
