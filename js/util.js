const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { getRandomNumber };

const generateCoordinate = (min, max, digit = 5) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return (Math.random() * ((max - min) + min)).toFixed(digit);
};

export { generateCoordinate };

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [[array[i]], array[j]] = [array[j], array[i]];
  }
  return array;
};

export { shuffleArray };
