import { unlink } from "node:fs/promises";
import path from "path";

const remove = async () => {
  // Write your code here
  try {
    await unlink(path.join("src", "fs", "files", "fileToRemove.txt"));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
