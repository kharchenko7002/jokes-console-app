const fetchJokes = require("./fleretull");
const showMenu = require("./hovedmenu");

const url = "https://terjetheteacher.github.io/some-jokes/justJokes.json";

fetchJokes(url, (jokes) => {
  console.log("Vitser lastet ned!");
  showMenu(jokes);
});
