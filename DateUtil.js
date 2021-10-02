/* ::: USAGE ::: */

/* CALL THE UTILITY BY IMPORTING IT 
Ex. :: const DateUtil = require("./DateUtil.js") :: The path will depends on where did you put the utility ::: 
and it will be use as
DateUtil.diff(date1 or start,date or end)
  Thank You!
*/

const diff = (start, end) => {
  /* :: partial day that is not include :: */
  const partialDay = 1;

  /* :: number of milliseconds in one day :: */
  const oneDay = 1000 * 60 * 60 * 24;

  // convert dates into valid javascript dates mm/dd/yyyy
  /* :: SPLIT THE STRINGS :: */
  const str1 = start.split("/");
  const str2 = end.split("/");

  // console.log(str1, str2);

  /* :: Initialize new Date Sting :: */
  const newStartDate = new Date(str1[1] + "/" + str1[0] + "/" + str1[2]);
  const newEndDate = new Date(str2[1] + "/" + str2[0] + "/" + str2[2]);

  /* :: subtract both dates :: */
  const diffDate = newEndDate - newStartDate;

  /* getting the date difference by making diff date as an absolute value - always be a positive value :: */
  /* :: then subract it into the partial days :: */
  const diffIndays = Math.abs(diffDate / oneDay) - partialDay;

  /* :: round off the calcucation to not receive and decimal on the result   :: */
  /* :: Console log it to display the result :: */

  return console.log(Math.round(diffIndays));
};

module.exports = { diff };
