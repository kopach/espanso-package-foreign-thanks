import { dump } from 'js-yaml';

export function generateManifestFile() {
  const packageJSON = require('../package.json');

  const manifest = {
    author: packageJSON.author,
    description: packageJSON.description,
    name: packageJSON.name,
    title: packageJSON.displayName,
    version: packageJSON.version,
    homepage: packageJSON.homepage,
    tags: packageJSON.keywords,
  };

  return dump(manifest, { sortKeys: true });
}
