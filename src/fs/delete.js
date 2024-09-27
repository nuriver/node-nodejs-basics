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

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToRemovePath = path.join(__dirname, "files", "fileToRemove.txt");

  const fileToRemoveExist = await isExist(fileToRemovePath);

  if (fileToRemoveExist) {
    await fs.unlink(fileToRemovePath);
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
