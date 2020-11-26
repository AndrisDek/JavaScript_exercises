/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores.pop();
  }

  get personalBest() {
    var arr = this.scores;
    var highNum = 0;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        highNum = arr[i];
      }
    }
    return highNum;
  }

  get personalTopThree() {
    var arr = this.scores;
    const result = arr.sort((x, y) => y - x).slice(0, 3);
    return result;
  }
}

export { HighScores };
