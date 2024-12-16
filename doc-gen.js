const vueDocs = require("vue-docgen-api");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

async function docgen(filePath, fileName) {
  const componentInfo = await vueDocs.parse(path.join(".", "src", "components", filePath, fileName), {
    alias: { "@": path.resolve(__dirname, path.join(".", "src")) },
    modules: [path.resolve(__dirname, ".")],
    validExtends: (fullFilePath) => !/[\\/]node_modules[\\/]/.test(fullFilePath),
    jsx: true
  });
  delete componentInfo.sourceFiles;
  fs.mkdir(path.join(".", "public", "docs", filePath), { recursive: true }, () => {
  });
  fs.writeFile(
    path.join(".", "public", "docs", filePath, fileName.replace("vue", "json")),
    JSON.stringify(componentInfo, null, 2),
    () => {
    }
  );
}

const prefix = path.join(__dirname, "src", "components");
glob(prefix + path.sep + "**/*.vue", {}, (err, files) => {
  files.map((f) => {
    const parts = path.normalize(f).replace(prefix, "").split(path.sep);
    const fileName = parts.pop();
    const filePath = path.join(path.sep, ...parts, path.sep);
    docgen(filePath, fileName).then(() => console.log(`generated ${filePath}${fileName.replace("vue", "json")}`));
  });
});

const commonSource = path.join(__dirname, "src", "common");
const commonDest = path.join(__dirname, "public", "files");
glob(commonSource + path.sep + "**/!(*.spec).ts", {}, (err, files) => {
  files.map((f) => {
    const parts = path.normalize(f).replace(commonSource, "").split(path.sep);
    const fileName = parts.pop();
    const filePath = `${commonDest}${path.join(path.sep, ...parts, path.sep)}`;
    fs.mkdir(filePath, { recursive: true }, () => {
    });
    console.log(`copied from ${f} to ${filePath}${fileName}`);
    fs.copyFile(f, `${filePath}${fileName}`, () => {
    });
  });
});
