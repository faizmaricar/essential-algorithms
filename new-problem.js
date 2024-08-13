import fs from "fs";
import path from "path";
import childProcess from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const problemDir = path.join(__dirname, "problems");

const problemfiles = fs
  .readdirSync(problemDir)
  .filter((file) => !fs.statSync(`${problemDir}/${file}`).isDirectory());

const count = problemfiles.length;
const problemNumber = Math.floor(count / 4) + 1;

const files = [
  `p${problemNumber}.md`,
  `p${problemNumber}.spec.js`,
  `p${problemNumber}-solution.js`,
];

fs.writeFile(
  path.join(problemDir, `p${problemNumber}.js`),
  `export default function p${problemNumber}() {}`,
  function (err) {
    if (err) throw err;
  }
);

files.forEach((file) => {
  fs.writeFile(path.join(problemDir, file), "", function (err) {
    if (err) throw err;
  });
});
