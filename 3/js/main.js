const NUMBER_PHOTO = 25;
const MESSAGES_COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME_COMMENT = [
  'Артем',
  'Влад',
  'Игорь',
  'Денис',
  'Егор',
  'Александр',
  'Илья',
  'Константин',
];

// Генератор уникальных неповторяющихся id из указанного диапазона.
const getRandomIdInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomNumberFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomIdInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomIdInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Случайное число из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (el) => el[getRandomInteger(0, el.length - 1)];

const getRandomCommentIdElement = createRandomNumberFromRangeGenerator(0, 10000);

// Комментарий к фотографии
const createComment = () => ({
  id: getRandomCommentIdElement(),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  name: getRandomArrayElement(NAME_COMMENT),
  message: getRandomArrayElement(MESSAGES_COMMENT),
});

const getRandomIdElement = createRandomNumberFromRangeGenerator(1, NUMBER_PHOTO);
const getRandomPhotoElement = createRandomNumberFromRangeGenerator(1, NUMBER_PHOTO);

// Описание фотографии
const createDescriptionPhoto = () => ({
  id: getRandomIdElement(),
  url: `photos/${ getRandomPhotoElement() }.jpg`,
  description: 'фото',
  likes: getRandomInteger(15, 200),

  descriptionPhoto: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const descriptionsPhoto = Array.from({length: 25}, createDescriptionPhoto);

descriptionsPhoto();
