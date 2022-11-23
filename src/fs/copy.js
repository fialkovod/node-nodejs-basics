import { cp } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const copy = async () => {
  // Write your code here
  try {
    let mod_dir = path.dirname(fileURLToPath(import.meta.url));
    let from = path.join(mod_dir, "files");
    let to = path.join(mod_dir, "files_copy");
    await cp(from, to, { force: false, errorOnExist: true, recursive: true });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

copy();
