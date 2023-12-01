import {readLines} from "../utils";
import {AdventDay} from "../AdventDay";

export class AdventDayOne implements AdventDay {
  partOne(): string {
    const input = readLines('day_01/input.txt');

    const calibrationValues: number[] = [];

    for (const line of input) {
      const numbers = line.split('').filter((n) => !isNaN(+n));

      calibrationValues.push(parseInt(numbers[0] + numbers[numbers.length - 1]));
    }

    return calibrationValues.reduce((a, b) => a + b, 0).toString();
  }

  partTwo(): string {
    const copy = {
      'one': 'o1e',
      'two': 't2o',
      'three': 't3e',
      'four': 'f4r',
      'five': 'f5e',
      'six': 's6x',
      'seven': 's7n',
      'eight': 'e8t',
      'nine': 'n9e'
    };

    const input = readLines('day_01/input.txt');

    return '';
  }
}

