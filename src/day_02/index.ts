import {readLines} from "../utils";
import {AdventDay} from "../AdventDay";

export class AdventDayTwo implements AdventDay {
  partOne(): string {
    const lines = readLines('day_02/input.txt');

    const games = this.parseInput(lines);
    const possible = [];

    for (const game of games) {
      if (!game.gameId || !game.sets) continue;

      let isPossible = true;

      for (const set of game.sets) {
        for (const cube of set) {
          const [amount, color] = cube.split(' ');

          if (color === 'red' && +amount > 12) {
            isPossible = false;
            break;
          } else if (color === 'green' && +amount > 13) {
            isPossible = false;
            break;
          } else if (color === 'blue' && +amount > 14) {
            isPossible = false;
            break;
          }
        }
      }

      if (isPossible) {
        possible.push(game.gameId);
      }
    }

    return possible.reduce((a, b) => a + b, 0).toString();
  }

  partTwo(): string {
    const lines = readLines('day_02/input.txt');

    const games = this.parseInput(lines);
    const minPowers = [];

    for (const game of games) {
      if (!game.gameId || !game.sets) continue;

      let maxRed = 0;
      let maxGreen = 0;
      let maxBlue = 0;

      for (const set of game.sets) {
        for (const cube of set) {
          const [amount, color] = cube.split(' ');

          if (color === 'red') {
            maxRed = Math.max(maxRed, +amount);
          } else if (color === 'green') {
            maxGreen = Math.max(maxGreen, +amount);
          } else if (color === 'blue') {
            maxBlue = Math.max(maxBlue, +amount);
          }
        }
      }

      minPowers.push(maxBlue * maxGreen * maxRed);
    }

    return minPowers.reduce((a, b) => a + b, 0).toString();
  }

  private parseInput(lines: string[]) {
    type Game = {
      gameId?: number;
      sets?: string[][];
    }

    const parsedInput: Game[] = [];

    for (const line of lines) {
      if (line === '') continue;

      const game: Game = {};
      game.sets = [];

      const separator = line.split(':');

      game.gameId = +separator[0].split(' ')[1];

      const sets = separator[1].split(';');

      for (const set of sets) {
        const cubes = [];
        const arr = set.split(',');

        for (const cube of arr) {
          cubes.push(cube.trim());
        }

        game.sets.push(cubes);
      }

      parsedInput.push(game);
    }

    return parsedInput;
  }
}

