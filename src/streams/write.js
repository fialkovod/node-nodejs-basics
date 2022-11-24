import { createWriteStream } from "fs";
const write = async () => {
  // Write your code here
  const writable = createWriteStream("./src/streams/files/fileToWrite.txt");
  process.stdin.pipe(writable);
};

await write();
