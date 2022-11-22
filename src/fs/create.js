import { writeFile } from "node:fs/promises";
import path from "path";

const create = async () => {
  // Write your code here
  try {
    await writeFile(
      path.join("src", "fs", "files", "fresh.txt"),
      "I am fresh and young",
      { flag: "wx" }
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
