import fs from "fs";
import path from "path";
import childProcess from "child_process";
import { fileURLToPath } from "url";

const ignore = ".gitignore";
const p = "p[0-9].js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const problemDir = path.join(__dirname, "problems");

const files = fs
  .readdirSync(problemDir)
  .filter((file) => !fs.statSync(`${problemDir}/${file}`).isDirectory());

const count = files.length;
const problemNumber = Math.floor(count / 3);

fs.readFile(ignore, "utf8", function (err, data) {
  if (err) throw err;

  const lines = data.split("\n");
  const lastLine = lines.pop();

  if (lastLine === p) {
    fs.writeFile(ignore, lines.join("\n"), function (err) {
      if (err) throw err;
    });
  }
});

childProcess.execSync("git add .");
childProcess.execSync(`git commit -m 'Add Problem ${problemNumber}'`);

fs.appendFile(ignore, p, "utf8", function (err) {
  if (err) throw err;
});

childProcess.execSync("git add .");
childProcess.execSync(`git commit -m 'insert ignore for ${problemNumber}'`);
