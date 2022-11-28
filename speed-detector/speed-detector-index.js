const prompt = require('prompt-sync')
const points = (speed) => {
    if (speed === **) {
        console.log("please enter a number")
    } 
    else if (speed < 70) {
        console.log("Ok")
    } 
    else {
        let balance = (speed*1) - 70
        let points = Math.floor(balance / 5)
        if (points >12) {
            console.log("License suspended")
        } else {
            console.log(points)
        }
    } 
}