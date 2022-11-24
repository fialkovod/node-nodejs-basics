import { readFile } from "node:fs/promises";
import { createHash } from "crypto";
const calculateHash = async () => {
  // Write your code here
  const hash = createHash("sha256");
  const fileContent = await readFile(
    "./src/hash/files/fileToCalculateHashFor.txt",
    {
      encoding: "utf8",
    }
  );
  hash.update(fileContent);
  console.log(hash.digest("hex"));
};

await calculateHash();
