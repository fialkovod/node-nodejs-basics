import { createReadStream } from "fs";
import { createHash } from "crypto";
const calculateHash = async () => {
  // Write your code here
  const hash = createHash("sha256");
  const fromfile = createReadStream("./files/fileToCalculateHashFor.js");
  fromfile.pipe(hash).setEncoding("hex").pipe(console.log);
};

await calculateHash();
