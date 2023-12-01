import {readLines} from "../utils";

const input = readLines('day_01/input.txt');

// Part 1
const calibrationValues: number[] = [];

for (const line of input) {
  const numbers = line.split('').filter((n) => !isNaN(+n));

  calibrationValues.push(parseInt(numbers[0] + numbers[numbers.length - 1]));
}

console.log(`Part 1: ${calibrationValues.reduce((a, b) => a + b, 0)}`);
