export function fourthMostFrequently(inputString, numberOfDifferentCharacters, orderByOccurrences) {
  const differentCharacters = numberOfDifferentCharacters(inputString);
  if (differentCharacters >= 0 && differentCharacters < 4) {
    return null;
  }
  return orderByOccurrences(inputString, 'desc').pop();
}
