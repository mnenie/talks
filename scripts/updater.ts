import * as fs from "node:fs";
import * as path from "node:path";

type Directories = string[];

const readme = path.resolve(__dirname, "../README.md");

function getDirectories(directory: string): Directories {
  const directories: string[] = [];
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const _path = path.join(directory, file);

    if (
      fs.statSync(_path).isDirectory() &&
      !["node_modules", ".git"].includes(file)
    ) {
      const readmePath = path.join(_path, "README.md");

      if (fs.existsSync(readmePath)) {
        directories.push(_path);
      }
      directories.push(...getDirectories(_path));
    }
  });

  return directories;
}

function extractHeaders(readmePath: string): string[] {
  const content = fs.readFileSync(readmePath, "utf8");
  const headers: string[] = [];
  const lines = content.split("\n");

  lines.forEach((line) => {
    if (line.startsWith("# ")) {
      headers.push(line.trim().replace("# ", ""));
    }
  });

  return headers;
}

function addReadmes(): void {
  let contentMain = fs.readFileSync(readme, "utf8");
  const readmeDirs = getDirectories(path.resolve(__dirname, "../"));

  readmeDirs.forEach((dirPath) => {
    const headers = extractHeaders(path.join(dirPath, "README.md"));

    headers.forEach((header) => {
      const relativePath = path.relative(
        path.resolve(__dirname, "../"),
        dirPath,
      );
      // @ts-ignore
      const link = `\n* [${header}](${relativePath.replaceAll("\\", "/").replace(/^\.\./, ".")})\n`;
      if (!contentMain.includes(link)) {
        contentMain += link;
      }
    });
  });

  fs.writeFileSync(readme, contentMain, "utf8");
}

addReadmes();
