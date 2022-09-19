const vueDocs = require("vue-docgen-api");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

async function docgen(filePath, fileName) {
  const componentInfo = await vueDocs.parse(`./src/components/${filePath}/${fileName}`, {
    alias: { "@": path.resolve(__dirname, "./src/") },
    modules: [path.resolve(__dirname, ".")],
    validExtends: (fullFilePath) => !/[\\/]node_modules[\\/]/.test(fullFilePath),
    jsx: true
  });
  fs.mkdir(`./public/docs/${filePath}`, { recursive: true }, () => {
  });
  fs.writeFile(
    `./public/docs/${filePath}/${fileName.replace("vue", "json")}`,
    JSON.stringify(componentInfo, null, 2),
    () => {
    }
  );
}

const prefix = __dirname + "/src/components/";
glob(prefix + "**/*.vue", {}, (err, files) => {
  files.map((f) => {
    const parts = f.replace(prefix, "").split("/");
    const fileName = parts.pop();
    const filePath = parts.join("/");
    docgen(filePath, fileName).then(() => console.log(`generated ${filePath}/${fileName.replace("vue", "json")}`));
  });
});

const commonSource = __dirname + "/src/common/";
const commonDest = __dirname + "/public/files/";
glob(commonSource + "**/!(*.spec).ts", {}, (err, files) => {
  files.map((f) => {
    const parts = f.replace(commonSource, "").split("/");
    const fileName = parts.pop();
    const filePath = `${commonDest}${parts.join("/")}/`;
    fs.mkdir(filePath, { recursive: true }, () => {
    });
    console.log(`copied from ${f} to ${filePath}${fileName}`);
    fs.copyFile(f, `${filePath}${fileName}`, () => {
    });
  });
});

