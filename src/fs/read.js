import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const read = async () => {
  // Write your code here
  try {
    const mod_dir = path.dirname(fileURLToPath(import.meta.url));
    const fileContent = await readFile(
      path.join(mod_dir, "files", "fileToRead.txt"),
      { encoding: "utf8" }
    );
    console.log(fileContent);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
