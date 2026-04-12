/* Reads body-{en,es,fr,ru}.html and emits part-1-bodies-{lang}.js */
const fs = require('fs');
const path = require('path');
const dir = __dirname;
['en', 'es', 'fr', 'ru'].forEach((lang) => {
  const src = path.join(dir, `body-${lang}.html`);
  if (!fs.existsSync(src)) {
    console.warn('skip missing', src);
    return;
  }
  const html = fs.readFileSync(src, 'utf8').trim();
  const out =
    'window.PART1_BODIES=window.PART1_BODIES||{};\n' +
    `window.PART1_BODIES.${lang}=${JSON.stringify(html)};\n`;
  fs.writeFileSync(path.join(dir, `part-1-bodies-${lang}.js`), out);
  console.log('wrote', lang, html.length);
});
