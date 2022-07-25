import { writeFileSync, mkdirSync } from 'fs';
import { generateManifestFile } from './generateManifestFile';
import { generatePackageYML } from './generatePackageYML';
import { generateReadme } from './generateReadme';
import { getOutputDirectory } from './getOutputDirectory';

const outputDirectory = getOutputDirectory();
mkdirSync(outputDirectory, { recursive: true });

writeFileSync(`${outputDirectory}/package.yml`, generatePackageYML());
writeFileSync(`${outputDirectory}/_manifest.yml`, generateManifestFile());
writeFileSync(`${outputDirectory}/README.md`, generateReadme());
