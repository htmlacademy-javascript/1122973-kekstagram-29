// Генератор уникальных неповторяющихся id из указанного диапазона.
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (el) => el[getRandomInteger(0, el.length - 1)];

const createCommentId = () => {
  let countId = 0;

  return () => {
    countId += 1;
    return countId;
  };
};

export {getRandomInteger, getRandomArrayElement, createCommentId};
