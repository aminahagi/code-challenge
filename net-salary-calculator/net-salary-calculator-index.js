const prompt = require('prompt-sync')
 // calculate PAYE based on basic salary
 const taxRate = (gross) => {
    if (gross <= 24000) {
        return 10/100
    }
    else if (gross >= 24001 && salary <= 32333) {
        return 25/100
    }
    else if (gross >= 32334) {
        return 30/100
    }
 }
 // NHIF deductions
 const NhifDeduction = (gross) => {
    if (gross <= 5999) {
        return 150
    }
    else if (gross <= 7999) {
        return 300
    }
    else if (gross <= 11999) {
        return 400
    }
    else if (gross <= 14999) {
        return 500
    }
    else if (gross <= 19999) {
        return 600
    }
    else if (gross <= 24999) {
        return 750
    }
    else if (gross <= 29999) {
        return 850
    }
    else if (gross <= 34999) {
        return 900
    }
    else if (gross <= 39999) {
         return 950
    }
    else if (gross <= 44999) {
        return 1000
    }
    else if (gross <= 49999) {
        return 1100
    }
    else if (gross <= 59999) {
        return 1200
    }
    else if (gross <= 69999) {
        return 1300
    }
    else if (gross <= 79999) {
        return 1400
    }
    else if (gross <= 89999) {
        return 1500
    }
    else if (gross <= 99999) {
        return 1600
    }
    else {
        return 1700
    }
        
}
//NSSF Deductions (we will use the old rates)
const nssfDeduction = 400
// caculate net salary
const salary = (gross) => {
    console.log(gross - (gross*taxRate(gross)) - nssfDeduction - NhifDeduction(gross))
}
// 
readLine.question("please enter your gross salary:", gross =>{
    salary(gross)
    readLine.close()
})