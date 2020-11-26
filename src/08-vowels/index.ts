/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  var m = s.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

export { vowels };
