// import { request as requester } from 'sonata-react-components/lib/helpers';
// import { en } from '../../src/i18n';

export function* importLanguage(locale: string = 'en') {
  const frontTranslations = require(`./${locale}`);
  console.log('frontTranslations', frontTranslations);
  let nestedMessages = frontTranslations;
  // const externalCopies = yield requester.makeRequest(
  //   `${config.backendUrlBase}i18n?locale=${locale}`,
  //   {
  //     type: 'GET'
  //   }
  // );
  // if (externalCopies && externalCopies.translations) {
  //   nestedMessages = {
  //     ...nestedMessages,
  //     ...externalCopies.translations
  //   };
  // }
  return flattenMessages(nestedMessages);
}

function flattenMessages(nestedMessages: any, prefix: string = '') {
  return Object.keys(nestedMessages).reduce((messages: any, key: string) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    // @ts-ignore
    window.i18n = messages;
    return messages;
  }, {});
}
