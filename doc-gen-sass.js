const { parse, stringify } = require('scss-parser');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

const extractSelector = (context, rule) => {
  const selectorNode = rule.value.find((child) => child.type === 'selector');

  const selector = selectorNode.value
    .map((child) => {
      switch (child.type) {
        case 'class':
          return `.${child.value[0].value}`;
        case 'operator':
          return child.value;
        default:
          return null;
      }
    })
    .filter((child) => child !== null)
    .join(' ');

  return `${context !== '' ? context + ' ' : ''}${selector}`.replace(' & ', '');
};

const parseComment = (commentString) => {
  const commentWords = commentString
    .split(' ')
    .map((word) => word.trim())
    .filter((word) => word !== '' && word !== '*' && word !== '/**' && word !== '*/');

  const annotations = {};

  commentWords.forEach((word, index) => {
    if (word.indexOf('@') === 0) {
      const key = word.replace('@', '');
      annotations[key] = commentWords[index + 1].trim();
    }
  });

  return {
    annotations,
    text: commentWords
      .filter((word, index) => word.indexOf('@') !== 0 && (index === 0 || commentWords[index - 1].indexOf('@') !== 0))
      .join(' ')
      .trim(),
  };
};

const extractCssVariableDeclaration = (node) => {
  const propertyNode = node.value[0];
  const name = propertyNode.type === 'property' ? stringify(propertyNode) : null;

  if (name && name.indexOf('--') === 0) {
    return {
      name,
      value: stringify(node.value[2]).trim(),
    };
  }

  return null;
};

const extractDocumentedCssVariables = (block) => {
  const result = [];
  for (let i = 0; i < block.value.length; i++) {
    const child = block.value[i];
    if (child.type === 'comment_multiline') {
      const next = block.value[i + 2];
      if (next && next.type === 'declaration') {
        const declaration = extractCssVariableDeclaration(next);
        if (declaration) {
          result.push({
            comment: parseComment(child.value),
            ...declaration,
          });
        }
      }
    }
  }

  return result;
};

const extractRules = (context, root) => {
  const rules = root.value
    .filter((node) => node.type === 'rule')
    .map((node) => {
      const selector = extractSelector(context, node);
      return {
        selector,
        node,
        properties: node.value
          .filter((node) => node.type === 'block')
          .flatMap((block) => extractDocumentedCssVariables(block)),
      };
    });

  const nestedRules = rules.flatMap(({ selector, node }) => extractRules(selector, node));

  const blocks = root.value.filter((node) => node.type === 'block');
  const blockRules = blocks.flatMap((block) => extractRules(context, block));

  return [...rules, ...nestedRules, ...blockRules].map(({ selector, properties }) => ({
    selector,
    properties,
  }));
};

const docGenSass = async (filePath, fileName) => {
  const sassContent = fs.readFileSync(filePath).toString();
  const sassAst = parse(sassContent);
  const variables = extractRules('', sassAst);

  const outputDir = path.join(__dirname, 'public', 'docs', 'sass');
  const outputFilePath = path.join(outputDir, fileName.replace('scss', 'json'));

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fs.mkdir(outputDir, { recursive: true }, () => {});
  fs.writeFile(
    outputFilePath,
    JSON.stringify(variables, null, 2),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
  );
};

const prefix = path.join(__dirname, 'src', 'sass');
// eslint-disable-next-line n/handle-callback-err
glob(prefix + path.sep + 'variables-*.scss', {}, (err, files) => {
  // eslint-disable-next-line array-callback-return
  files.map((f) => {
    const parts = path.normalize(f).replace(prefix, '').split(path.sep);
    const fileName = parts.pop();
    docGenSass(f, fileName).then(() => console.log(`parsed SASS ${f.replace('scss', 'json')}`));
  });
});
