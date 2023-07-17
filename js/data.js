import { getRandomInteger, getRandomArrayElement, createCommentId } from './util.js';

const NUMBER_PHOTO = 25;
const COMMENT_COUNT = 30;
const AVATAR_COUNT = 6;
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

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(MESSAGES_COMMENT),
). join(' ');

const generateCommentId = createCommentId();

// Комментарий к фотографии
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATAR_COUNT) }.svg`,
  name: getRandomArrayElement(NAME_COMMENT),
  message: createMessage(),
});

// Описание фотографии
const createDescriptionPhoto = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: 'фото',
  likes: getRandomInteger(15, 200),

  descriptionPhoto: Array.from({length: getRandomInteger(0, COMMENT_COUNT)}, createComment),
});

const getPhoto = Array.from({length: NUMBER_PHOTO}, (_item, index) => createDescriptionPhoto(index + 1));

export {getPhoto};
