/* TEST PURPOSES */
/* :: USING MOMENTS JS :: */

const moment = require("moment");

const momentCalcDate = (start, end) => {
  const partialDay = 1;
  // convert dates into valid javascript dates mm/dd/yyyy
  /* :: SPLIT THE STRINGS :: */
  const str1 = start.split("/");
  const str2 = end.split("/");

  // console.log(str1, str2);

  /* :: Initialize new Date Sting :: */
  const newStartDate = new Date(str1[1] + "/" + str1[0] + "/" + str1[2]);
  const newEndDate = new Date(str2[1] + "/" + str2[0] + "/" + str2[2]);
  var a = moment(newStartDate);
  var b = moment(newEndDate);
  const result = Math.abs(a.diff(b, "days")) - partialDay;
  console.log(result);
};

momentCalcDate("22/06/1983", "02/06/1983");
momentCalcDate("04/07/1984", "25/12/1984");
momentCalcDate("03/01/1989", "03/08/1983");

module.exports = { momentCalcDate };
