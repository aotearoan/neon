const inner = require('@vue/vue3-jest');
const convert = require('convert-source-map');

module.exports = {
  getCacheKey: inner.getCacheKey,

  process(src, filename, config) {
    const r = inner.process(src, filename, config);
    const map = typeof r.map === 'string' ? JSON.parse(r.map) : r.map;
    const comment = convert.fromObject(map).toComment();
    r.code = `${r.code}\n\n${comment}`;
    return r;
  },
};
