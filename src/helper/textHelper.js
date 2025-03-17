export function capitalizeFirstLetter(str) {
    if (!str || str === undefined || str === null) {
        return '';
    }
    return (str.charAt(0).toUpperCase() + str.slice(1))
}
export function getRandomNumber(min, max)  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
