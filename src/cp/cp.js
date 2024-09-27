import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const spawnChildProcess = async (arg) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const scriptPath = path.join(__dirname, "files", "script.js");
  const child = spawn("node", [scriptPath, ...arg]);

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    process.stdout.write(data.toString());
  }); 

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["--one", "--two"]);
