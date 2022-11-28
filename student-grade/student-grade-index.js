const prompt = require('prompt-sync');
const value = 100;
function avg(value) {
    if (value>79) {
        return('A')
    } else if (value <= 60) {
        return('B')
    } else if (value <= 59) {
        return('C')
    } else if (value <= 49) {
        return('D')
    } else {
        return('E')
    }
}
console.log("input should be between 0 to 100")