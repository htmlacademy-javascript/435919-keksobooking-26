const getRandomNumber = (min, max) => {
    if (min < 0 || max < 0){
        return -1;}

    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max-min + 1) + min);
};


const generateCoordinate = (min, max, digit = 5) => {
    if (min < 0 || max < 0){
        return -1;
    }
    
    if (min > max) {
        [min, max] = [max, min];
    }

    return (Math.random() * ((max-min) + min)).toFixed(digit);
}
