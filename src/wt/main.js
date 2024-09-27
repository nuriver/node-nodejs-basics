import os from "os";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
import path from "path";

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const workerPath = path.join(__dirname, "worker.js");
  const numOfCores = os.cpus().length;
  const resultArray = new Array(numOfCores);
  const workerPromises = [];

  for (let i = 0; i < numOfCores; i += 1) {
    workerPromises.push(
      new Promise((resolve) => {
        const worker = new Worker(workerPath, {
          workerData: { num: i + 10 },
        });

        worker.on("message", (result) => {
          resultArray[i] = { status: "resolved", data: result };
          resolve();
        });

        worker.on("error", (err) => {
          resultArray[i] = { status: "error", data: null };
          resolve();
        });
      })
    );
  }

  await Promise.all(workerPromises);

  console.log(resultArray);
};

await performCalculations();
