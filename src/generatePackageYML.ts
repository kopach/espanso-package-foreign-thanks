import { dump } from 'js-yaml';
import { dictionary, DictionaryRecord } from './dictionary';

type EspansoYML = {
  replace: string;
} & ({ trigger: string } | { triggers: string[] });
export function generatePackageYML() {
  const matches = {
    matches: dictionary.reduce((acc: EspansoYML[], record) => {
      return [...acc, ...getMatch(record)];
    }, []),
  };

  return dump(matches, { sortKeys: true });
}

function getMatch({
  name,
  value: replace,
  ISOkey,
}: DictionaryRecord): EspansoYML[] {
  return [
    { triggers: [`:${ISOkey}thx`, `:${name}thx`, `:${name}thanks`], replace },
  ];
}
