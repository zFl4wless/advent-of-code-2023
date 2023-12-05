import * as readline from 'readline';
import {AdventDay} from "./AdventDay";
import {AdventDayOne} from "./day_01";
import {AdventDayTwo} from "./day_02";
import {AdventDayThree} from "./day_03";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const days: AdventDay[] = [
  new AdventDayOne,
  new AdventDayTwo,
  new AdventDayThree,
];

rl.question('Which day do you want to solve? [1-24] ', (answer) => {
  if (isNaN(+answer) || +answer < 1 || +answer > 24) {
    console.log('Please enter a number between 1 and 24.');
    rl.close();
    return;
  }

  const day = +answer;
  console.log(`Solving day ${day}...`);

  if (!days[day - 1]) {
    console.log(`Day ${day} has not been solved yet.`);
    rl.close();
    return;
  }

  console.log(`Part 1: ${days[day - 1].partOne()}`);
  console.log(`Part 2: ${days[day - 1].partTwo()}`);

  rl.close();
});
