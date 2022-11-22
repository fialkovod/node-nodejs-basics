import { unlink } from "node:fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  // Write your code here
  const __dirname = dirname(fileURLToPath(import.meta.url));
  try {
    let link = path.join(__dirname, "files", "fileToRemove.txt");
    await unlink(link);
    console.log(`successfully deleted ${link}`);
  } catch (error) {
    console.error("Error deleting file happened:", error.message);
  }
};

await remove();
