const getRandomInt = (min, max) => {
    if (min < 0 || max < 0)
    return -1;
}

if (min > max) {
    [min, max] = [max, min];

    return Math.floor(<Math.random() * (max-min + 1) + min);
}

getRandomInt (1, 555)

const getRandomFloat = (min, max, digit = 5) => {
    if (min < 0 || max < 0)
    return -1;
}

if (min > max) {
    [min, max] = [max, min];

    return (Math.random() * ((max-min) + min)).toFixed(digit);
}

getRandomFloat(1, 555)

getRandomInt (1, 555)