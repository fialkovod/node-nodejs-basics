import { unlink } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const remove = async () => {
  // Write your code here
  try {
    let mod_dir = path.dirname(fileURLToPath(import.meta.url));
    await unlink(path.join(mod_dir, "files", "fileToRemove.txt"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
