module.exports = {
  process(sourceText, _sourcePath) {

    return {
      code: `const svg = ${JSON.stringify(sourceText)};\nmodule.exports = svg;`
    };
  }
};
