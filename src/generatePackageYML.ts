import { dump } from 'js-yaml';
import { dictionary, DictionaryRecord } from './dictionary';

type EspansoYML = {
  trigger: string;
  replace: string;
};
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
    { trigger: `:${ISOkey}thx`, replace },
    { trigger: `:${name}thx`, replace },
    { trigger: `:${name}thanks`, replace },
  ];
}
