import { dictionary, DictionaryRecord } from './dictionary';

export function generateReadme() {
  const header = getHeader();
  const footer = getFooter();

  return `${header}

## Triggers

| Keywords | Replaced |
| -------- | -------- |
${dictionary.map((record) => getRow(record)).join('\n')}

${footer}`;
}

function getRow({ name, ISOkey, value }: DictionaryRecord) {
  return `| \`:${ISOkey}thx\`, \`:${name}thx\`, \`:${name}thanks\` | ${value} |`;
}

function getHeader() {
  return `# 🌐 Foreign Thanks

[Espanso](https://espanso.org) package to easy say Thanks in different languages.

⭐️ Consider to star this package on [GitHub](https://github.com/kopach/espanso-package-foreign-thanks/stargazers) — it helps!

[✨ 👉 Check out my other espanso packages 👈 ✨](https://github.com/kopach?tab=repositories&q=espanso-package&type=source)

<h1 align="center">

![demo](https://github.com/kopach/espanso-package-foreign-thanks/blob/main/assets/demo.gif)

</h1>

## Installation

Make sure you have already installed [Espanso](https://espanso.org/install) first.

### Install with \`espanso install\`

> https://hub.espanso.org/foreign-thanks

\`\`\`sh
espanso install foreign-thanks
\`\`\`

That's all. You can start using the package.`;
}

function getFooter() {
  return `## Contribute

Please, feel free to contribute to this package on [GitHub](https://github.com/kopach/espanso-package-foreign-thanks)

## Credits

Inspired by [Foreign Thanks](https://snippets.textexpander.com/group/a3c4abfa3e21d9d77cd0542d6ce69f20) for [Text Expander](https://textexpander.com) app

## 📄 License

This espanso package licensed under the [MIT](https://github.com/kopach/espanso-package-foreign-thanks/blob/master/LICENSE)`;
}
