import fs from "fs";
import path from "path";
import { stdout } from "process";
import { fileURLToPath } from "url";
import {createHash} from "crypto";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  
  const readableStream = fs.createReadStream(filePath);
  const hash = createHash("sha256");

  readableStream.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
