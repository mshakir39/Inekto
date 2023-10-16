import { writable, derived } from 'svelte/store';

export const dict = writable();
export const locale = writable('fr');

const localizedDict = derived([dict, locale], ([$dict, $locale]:any) => {
  if (!$dict || !$locale || !$dict[$locale]) {
    return {}; // Return an empty object or another fallback value as needed
  }
  return $dict[$locale];
});

const getMessageFromLocalizedDict = (id:any, localizedDict:any) => {
  if (!localizedDict) {
    return ''; // Return an empty string or another fallback value as needed
  }
  const splitId = id?.split('.');
  let message = { ...localizedDict };
  splitId?.forEach((partialId:any) => {
    message = message[partialId];
  });
  return message || ''; // Return an empty string if the message is not found
};

const createMessageFormatter = (localizedDict:any) => (id:any) => getMessageFromLocalizedDict(id, localizedDict);

export const t = derived(localizedDict, ($localizedDict) => {
  return createMessageFormatter($localizedDict);
});
