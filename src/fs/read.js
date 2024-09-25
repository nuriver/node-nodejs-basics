import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const isExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToReadPath = path.join(__dirname, "files", "fileToRead.txt");
  
  const fileToReadExist = await isExist(fileToReadPath);

  if (fileToReadExist) {
    const data = await fs.readFile(fileToReadPath, "utf8");
    console.log(data);
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
