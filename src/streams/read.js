import { open } from "fs/promises";

const read = async () => {
  // Write your code here
  const fd = await open("./src/streams/files/fileToRead.txt");
  const readable = fd.createReadStream();
  readable.pipe(process.stdout);
};

await read();
