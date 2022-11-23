import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const create = async () => {
  // Write your code here
  try {
    let mod_dir = path.dirname(fileURLToPath(import.meta.url));
    await writeFile(
      path.join(mod_dir, "files", "fresh.txt"),
      "I am fresh and young",
      { flag: "wx" }
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
