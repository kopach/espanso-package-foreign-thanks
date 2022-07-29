export interface DictionaryRecord {
  name: string;
  ISOkey: string;
  value: string;
}

export const dictionary: DictionaryRecord[] = [
  { name: 'arabic', ISOkey: 'ar', value: 'شكرا' },
  { name: 'armenian', ISOkey: 'hy', value: 'Շնորհակալություն' },
  { name: 'basque', ISOkey: 'eu', value: 'Eskerrik asko' },
  { name: 'belarusian', ISOkey: 'be', value: 'Дзякуй' },
  { name: 'canadian', ISOkey: 'ca', value: 'thanks, eh.' },
  { name: 'chinese', ISOkey: 'zh', value: '谢谢' },
  { name: 'czech', ISOkey: 'cs', value: 'Díky' },
  { name: 'dutch', ISOkey: 'nl', value: 'Dank je wel' },
  { name: 'filipino', ISOkey: 'tl', value: 'Salamat' },
  { name: 'finnish', ISOkey: 'fi', value: 'Kiitos' },
  { name: 'french', ISOkey: 'fr', value: 'Merci' },
  { name: 'german', ISOkey: 'de', value: 'Danke' },
  { name: 'hindi', ISOkey: 'hi', value: 'धन्यवाद' },
  { name: 'icelandic', ISOkey: 'is', value: 'Takk' },
  { name: 'indonesian', ISOkey: 'id', value: 'Terima kasih' },
  { name: 'italian', ISOkey: 'it', value: 'Grazie' },
  { name: 'japanese', ISOkey: 'ja', value: 'ありがとうございます' },
  { name: 'klingon', ISOkey: 'tlh', value: "Qa tlho'" },
  { name: 'korean', ISOkey: 'ko', value: '감사합니다' },
  { name: 'pashto', ISOkey: 'ps', value: 'ډیره مننه' },
  { name: 'persian', ISOkey: 'fa', value: 'متشکرم' },
  { name: 'polish', ISOkey: 'pl', value: 'Dzięki' },
  { name: 'romanian', ISOkey: 'ro', value: 'Multumesc' },
  { name: 'spanish', ISOkey: 'es', value: 'Gracias' },
  { name: 'swedish', ISOkey: 'sv', value: 'Tack' },
  { name: 'turkish', ISOkey: 'tr', value: 'Sağol' },
  { name: 'ukrainian', ISOkey: 'uk', value: 'Дякую' },
  { name: 'urdu', ISOkey: 'ur', value: 'شکریہ' },
  { name: 'vietnamese', ISOkey: 'vi', value: 'Cảm ơn' },
];
