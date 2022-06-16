function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
    
getRandomArbitrary()
    /* генерирование целого числа из диапазона
Источник: https://ask-dev.ru/info/1041/generating-random-whole-numbers-in-javascript-in-a-specific-range */


function random(min, max) {
    return min + Math.random() * (max - min);
      }
/*Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. 
Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/