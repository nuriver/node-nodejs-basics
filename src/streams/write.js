import fs from "fs";
import path from "path";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToWritePath = path.join(__dirname, "files", "fileToWrite.txt");
  const writableStream = fs.createWriteStream(fileToWritePath, "utf-8");

  stdout.write("Please, enter data you want to write to the file \n");
  stdin.on("data", (data) => {
    writableStream.write(data);
    stdout.write("Data was successfully written to the file");
    process.exit();
  })
};

await write();
