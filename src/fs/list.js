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

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesDirPath = path.join(__dirname, "files");

  const filesDirExist = await isExist(filesDirPath);

  if (filesDirExist) {
    const files = await fs.readdir(filesDirPath)
    console.log(files)
  } else {
    throw new Error("FS operation failed");
  }

};

await list();
