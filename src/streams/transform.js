import { Transform } from "stream";

const transform = async () => {
  // Write your code here

  const reverseStr = new Transform({
    transform(chunk, encoding, callback) {
      this.push(String(chunk).split("").reverse().join("") + "\n");
      callback();
    },
  });

  process.stdin.pipe(reverseStr).pipe(process.stdout);
};

await transform();
