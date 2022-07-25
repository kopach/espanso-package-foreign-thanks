export function generatePackageYML() {
  const dictionary = require('./dictionary.json');

  return `matches:
${Object.keys(dictionary)
  .map((lang) => getMatch(lang, dictionary[lang]))
  .join('\n')}`;
}
function getMatch(language: string, translation: string) {
  return `  - trigger: ':${language}thx'
    replace: '${translation}'
  - trigger: ':${language}thanks'
    replace: '${translation}'`;
}
