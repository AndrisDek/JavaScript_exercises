/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    return str
      .replace(/\s+/g, " ")
      .toLowerCase()
      .trim()
      .split(" ")
      .sort()
      .reduce((accumulator, word) => {
        accumulator[word] = accumulator[word] + 1 || 1;
        return accumulator;
      }, Object.create(null));
  }
}

export { Words };
