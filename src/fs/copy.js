import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const isExist = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourceDirPath = path.join(__dirname, "files");
  const distDirPath = path.join(__dirname, "files_copy");

  const srcExist = await isExist(sourceDirPath);
  const distExist = await isExist(distDirPath);

  if (srcExist && !distExist) {
    await fs.cp(sourceDirPath, distDirPath, { recursive: true });
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
