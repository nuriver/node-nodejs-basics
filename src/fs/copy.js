import fs from "fs/promises";

const copy = async () => {
  try {
    await fs.access("../fs/files");

    try {
      await fs.access("../fs/files_copy");
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        await fs.cp("../fs/files", "../fs/files_copy", { recursive: true });
      } else {
        throw error;
      }
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
