const https = require("https");

function fetchJokes(url, callback) {
  https
    .get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const jokesObject = JSON.parse(data);
          const jokes = Object.entries(jokesObject); // [ ["1", "Joke 1"], ... ]
          callback(jokes);
        } catch (err) {
          console.error("Feil ved parsing av JSON:", err.message);
        }
      });
    })
    .on("error", (err) => {
      console.error("Feil ved nedlasting:", err.message);
    });
}

module.exports = fetchJokes;
