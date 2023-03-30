export default function(inputString) {
  const nonRepeatingCharacters = new Set(inputString);
  return nonRepeatingCharacters.size;
}