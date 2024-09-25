import { writeFile, stat } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fresh.txt");

  stat(filePath, (error) => {
    if (!error) {
      throw new Error("FS operation failed");
    } else {
      writeFile(filePath, "I am fresh and young", (error) => {
        if (error) throw error;
      });
    }
  });
};

await create();
