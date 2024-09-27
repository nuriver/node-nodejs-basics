import { promisify } from 'util';
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { createGzip } from 'zlib';
import { pipeline } from 'stream';


const compress = async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(
    __dirname,
    "files",
    "fileToCompress.txt"
  );
  const archivePath = path.join(__dirname, "files", "archive.gz");
  const pipe = promisify(pipeline);
  const gzip = createGzip();
  const source = fs.createReadStream(sourcePath);
  const archive = fs.createWriteStream(archivePath);

  await pipe(source, gzip, archive);
};

await compress();
