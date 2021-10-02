const DateUtil = require("./DateUtil.js");
const moment = require("./momentsCalc");

/* :: TESTING :: */
console.log("::::: SOLUTION ::::::::");
/*:: Input Dates to show Different in days :: */
DateUtil.diff("02/06/1983", "22/06/1983");
DateUtil.diff("04/07/1984", "25/12/1984");
DateUtil.diff("03/01/1989", "03/08/1983");

console.log(":::::: USING FRAMEWORK ::::::");
console.log("======================");
console.log(":::: MOMENTS JS ::::");

/* USING MOMENT JS AS FRAMEWORK */
moment.momentCalcDate("02/06/1983", "22/06/1983");
moment.momentCalcDate("04/07/1984", "25/12/1984");
moment.momentCalcDate("03/01/1989", "03/08/1983");
