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

fs.writeFile(
  path.join(problemDir, `p${problemNumber}.js`),
  `export default function p${problemNumber}() {}`,
  function (err) {
    if (err) throw err;
  }
);

fs.writeFile(
  path.join(problemDir, `p${problemNumber}-solution.js`),
  `export default function p${problemNumber}() {}`,
  function (err) {
    if (err) throw err;
  }
);

fs.writeFile(
  path.join(problemDir, `p${problemNumber}.spec.js`),
  `import p${problemNumber}Solution from "./p${problemNumber}-solution.js";\nimport p${problemNumber} from "./p${problemNumber}.js";\n\nconst func = global.isSolution ? p${problemNumber}Solution : p${problemNumber};\n\ndescribe("Problem ${problemNumber}: <Problem name>", () => {});\n`,
  function (err) {
    if (err) throw err;
  }
);

fs.writeFile(
  path.join(problemDir, file`p${problemNumber}.md`),
  "",
  function (err) {
    if (err) throw err;
  }
);
