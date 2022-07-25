export function generateManifestFile() {
  const packageJSON = require('../package.json');
  return `author: ${packageJSON.author}
description: ${packageJSON.description}
name: ${packageJSON.name}
title: ${packageJSON.displayName}
version: ${packageJSON.version}
homepage: ${packageJSON.homepage}
tags: ["${packageJSON.keywords.join('", "')}"]`;
}
