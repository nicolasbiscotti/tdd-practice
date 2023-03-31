export default function orderByOccurrences(inputString) {
  let characters = [];
  const charactersByOccurrences = new Map();
  function addOccurrences(character, repository) {
    if (repository.has(character)) {
      repository.set(character, repository.get(character) + 1);
    } else {
      repository.set(character, 1);
    }
  }
  function mostFrequently(repository) {
    let graterOccurrences = 0;
    let character = "";

    for (const key of repository.keys()) {
      if (repository.get(key) > graterOccurrences) {
        character = key;
        graterOccurrences = repository.get(key);
      }
    }

    return character;
  }
  function orderDescByOccurrences(charactersByOccurrences) {
    const orderedCharacters = characters;
    while (charactersByOccurrences.size > 0) {
      const character = mostFrequently(charactersByOccurrences);
      orderedCharacters.push(character);
      charactersByOccurrences.delete(character);
    }
    return orderedCharacters;
  }

  for (const character of inputString) {
    addOccurrences(character, charactersByOccurrences);
  }

  characters = orderDescByOccurrences(charactersByOccurrences);

  console.log(charactersByOccurrences);

  return characters;
}
