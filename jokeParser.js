function parseJokes(data) {
  if (Array.isArray(data)) {
    return data; // justJokes.json (список строк)
  }

  if (data.jokes && Array.isArray(data.jokes)) {
    return data.jokes.map(j => j.joke); // jokes.json (список объектов)
  }

  if (typeof data === "object") {
    return Object.values(data); // если ключи — 1, 2, 3... (как в justJokes.json)
  }

  console.error("Ugyldig format på data.");
  return [];
}

module.exports = { parseJokes };
