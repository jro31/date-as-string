// prettier-ignore
const dateAsString = (date = new Date()) => {
  if (!(date instanceof Date)) throw new Error("The argument passed to date-as-string must be a date object");

  return `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(-2)}-${`0${date.getDate()}`.slice(-2)}`;
}

module.exports = dateAsString;
