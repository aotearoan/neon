module.exports = {
  process(sourceText, sourcePath) {
    const mockComponent = {
      name: sourcePath,
      template: sourceText
    };

    return {
      code: `module.exports = ${JSON.stringify(sourceText)};`
    };
  }
};
