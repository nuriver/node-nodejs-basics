import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString().trim();
      this.push(data.toString().split("").reverse().join("") + "\n");
      callback();
    }
  })

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
