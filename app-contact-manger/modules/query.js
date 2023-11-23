import contacts from './data.js';

export const findContact = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    // [1,'Frodo', 'Baggins','0742424242', ...,[]]

    const values = Object.values(contact).filter((part) => {
      return typeof part === 'number' || typeof part === 'string';
    });

    if (values.join('').includes(needle)) {
      return true;
    }
    return false;
  });

  return results;
};
