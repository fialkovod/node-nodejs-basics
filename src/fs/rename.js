import { rename as frename } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const rename = async () => {
  // Write your code here
  try {
    let mod_dir = path.dirname(fileURLToPath(import.meta.url));
    let oldName = path.join(mod_dir, "files", "wrongFilename.txt");
    let newName = path.join(mod_dir, "files", "properFilename.md");
    await frename(oldName, newName);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
