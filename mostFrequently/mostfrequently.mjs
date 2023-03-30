export function mostFrequently(theList) {
  if (theList.length === 0) {
    return "nothing here";
  }

  let theMostFrequent = "";
  let frequency = 0;

  let currentName = theList[0];
  let occurrences = 0;

  for (const name of theList) {
    if (currentName === name) {
      occurrences++;
    } else {
      if (occurrences > frequency) {
        theMostFrequent = currentName;
        frequency = occurrences;
      }
      currentName = name;
      occurrences = 1;
    }
  }

  if (occurrences > frequency) {
    theMostFrequent = currentName;
    frequency = occurrences;
  }

  return theMostFrequent;
}
