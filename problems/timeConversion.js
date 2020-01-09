/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 *
 * @param {string} s (07:05:45PM)
 * @returns {string} (19:05:45)
 */
function timeConversion(s) {
  const format = s.slice(8)
  const time = s.slice(0, 8)
  const hour = s.split(":")[0]
  let militaryHour = ""
  if (format === "PM" && hour !== '12') {
    militaryHour = parseInt(hour) + 12
    return militaryHour + s.slice(2, 8);
  }
  if (format === "AM" && hour === '12') {
    militaryHour = '00'
    return militaryHour + s.slice(2, 8);
  } else {
    return time;
  }
}
module.exports = timeConversion

