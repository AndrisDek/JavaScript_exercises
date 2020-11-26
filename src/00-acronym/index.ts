/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  return input.split(/\s|[-,_]/).reduce(function(accumulator, word) {
    return accumulator + word.toUpperCase().charAt(0);
  }, "");
}

export { parse };
