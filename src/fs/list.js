import { readdir } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const list = async () => {
  // Write your code here
  try {
    const mod_dir = path.dirname(fileURLToPath(import.meta.url));
    const files = await readdir(path.join(mod_dir, "files"));
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
