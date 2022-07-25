import { resolve } from 'path';

export function getOutputDirectory() {
  const packageJSON = require('../package.json');
  const version = packageJSON.version;
  const name = packageJSON.name;
  const outputDirectory = resolve(__dirname, name, version);
  return outputDirectory;
}
