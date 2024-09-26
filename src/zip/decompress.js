import { promisify } from "util";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const decompress = async () => {
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);
 const filePath = path.join(__dirname, "files", "fileToCompress.txt");
 const archivePath = path.join(__dirname, "files", "archive.gz");
 const pipe = promisify(pipeline);
 const gunzip = createGunzip();
 const archive = fs.createReadStream(archivePath);
 const file = fs.createWriteStream(filePath);

 await pipe(archive, gunzip, file);
};

await decompress();
