// Реалізувати програму ls. Дані повинні виводитись в форматі JSON.
const fs = require("fs/promises");
const path = require("path");
const CURR_DIR = __dirname;

async function getDirectoryListing() {
  try {
    const arrayOfFiles = await fs.readdir(CURR_DIR);
    let totalBlocks = 0;

    const res = {
      totalBlocks: 0,
      items: [],
    };

    for (const file of arrayOfFiles) {
      const filePath = path.resolve(CURR_DIR, file);
      const stats = await fs.stat(filePath);
      totalBlocks += stats.blocks;

      const permissions = (stats.mode & 0o777).toString(8);
      const hardLinks = stats.nlink;
      const owner = stats.uid;
      const group = stats.gid;
      const size = stats.size;
      const month = new Date(stats.mtime).toLocaleString("en-US", {
        month: "short",
      });
      const day = new Date(stats.mtime).getDate();
      const hour = new Date(stats.mtime).toLocaleTimeString();

      res.items.push({
        permissions,
        hardLinks,
        owner,
        group,
        size,
        month,
        day,
        hour,
        file,
      });
    }

    res.totalBlocks = totalBlocks / 2; //each block is 1024 bytes, but ls -s uses 512 bytes

    process.stdout.write(JSON.stringify(res, null, 2));
  } catch (error) {
    process.stdout.write(`error: ${error.message}`);
  }
}

getDirectoryListing().catch(console.warn());
