function parseJokes(data) {
  if (Array.isArray(data)) {
    return data; 
  }

  if (data.jokes && Array.isArray(data.jokes)) {
    return data.jokes.map(j => j.joke); 
  }

  if (typeof data === "object") {
    return Object.values(data); 
  }

  console.error("Ugyldig format på data.");
  return [];
}

module.exports = { parseJokes };
