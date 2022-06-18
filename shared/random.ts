/**
 * generate a random integer between min and max
 * 
 * @param min 
 * @param max 
 * @returns random integer
 */
const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export { randomInteger };
