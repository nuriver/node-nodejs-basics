import fs from "fs";
import path from "path";
import { stdout } from "process";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToReadPath = path.join(__dirname, "files", "fileToRead.txt");

  const readableStream = fs.createReadStream(fileToReadPath, "utf-8");
  readableStream.on("data", (data) => {
  stdout.write(data)
  })
};

await read();
