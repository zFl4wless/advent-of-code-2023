import * as fs from "fs";
import * as path from "path";

/**
 * Reads a file and returns an array of lines.
 *
 * @param filename The name of the file to read.
 */
export function readLines(filename: string): string[] {
  const input = fs.readFileSync(path.resolve(__dirname, filename), 'utf8');

  return input.split('\n').map((line) => line.trimEnd());
}