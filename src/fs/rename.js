import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const isExist = async (name) => {
  try {
    await fs.access(name);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const wrongFilePath = path.join(__dirname, "files", "wrongFilename.txt");
  const properFilePath = path.join(__dirname, "files", "properFilename.md");

  const wrongFileExist = await isExist(wrongFilePath);
  const properFileExist = await isExist(properFilePath);

  if (wrongFileExist && !properFileExist) {
    await fs.rename(wrongFilePath, properFilePath);
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
