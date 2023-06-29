/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

//Функция для проверки длины строки.
const getString = (string, length) => string.length <= length;

//Функция для проверки, является ли строка палиндромом.
const isPalindrom = (string) => {
  const newString = string.replaceAll(' ', '').toLowerCase();
  let emString = '';
  for(let i = newString.length - 1; i >= 0; i--) {
    const sym = newString.at(i);

    emString += sym;

    if (emString === newString) {
      return true;
    }
  }

  return false;
};
