import {readLines} from "../utils";
import {AdventDay} from "../AdventDay";

export class AdventDayThree implements AdventDay {
  partOne(): string {
    const lines = readLines('day_03/input.txt');
    const grid: string[][] = [];
    const partNumbers: number[] = [];
    const symbols: Set<string> = new Set();

    for (const line of lines) {
      grid.push(line.split(''));

      for (const char of line.split('')) {
        if (isNaN(+char) && char !== '.') {
          symbols.add(char);
        }
      }
    }

    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      let currentNumber = '';
      let isPartNumber = false;

      for (let j = 0; j < row.length; j++) {
        const col = row[j];

        if (col === '.') {
          if (isPartNumber && currentNumber !== '') {
            partNumbers.push(+currentNumber);
          }

          currentNumber = '';
          isPartNumber = false;
          continue;
        }

        if (!isNaN(+col)) {
          for (const symbol of symbols) {
            if (i > 0 && j > 0 && grid[i - 1][j - 1] === symbol) {
              isPartNumber = true;
              break;
            }

            if (i > 0 && grid[i - 1][j] === symbol) {
              isPartNumber = true;
              break;
            }

            if (i > 0 && j < row.length - 1 && grid[i - 1][j + 1] === symbol) {
              isPartNumber = true;
              break;
            }

            if (j > 0 && grid[i][j - 1] === symbol) {
              isPartNumber = true;
              break;
            }

            if (j < row.length - 1 && grid[i][j + 1] === symbol) {
              isPartNumber = true;
              break;
            }

            if (i < grid.length - 1 && j > 0 && grid[i + 1][j - 1] === symbol) {
              isPartNumber = true;
              break;
            }

            if (i < grid.length - 1 && grid[i + 1][j] === symbol) {
              isPartNumber = true;
              break;
            }

            if (i < grid.length - 1 && j < row.length - 1 && grid[i + 1][j + 1] === symbol) {
              isPartNumber = true;
              break;
            }
          }

          currentNumber += col;
        } else {
          currentNumber = '';
          isPartNumber = false;
        }
      }
    }

    return partNumbers.reduce((a, b) => a + b, 0).toString();
  }

  partTwo(): string {
    return '';
  }
}

