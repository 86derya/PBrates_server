const axios = require("axios");

getFormatedDate = (offSet = 0) => {
  const date = new Date(Date.now() - offSet * 24 * 3600 * 1000);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};

getDatesRange = (daysBefore = 7) => {
  let requiredDatesRange = [];
  for (i = 0; i < daysBefore; i++) {
    requiredDatesRange.push(getFormatedDate(i));
  }
  return requiredDatesRange;
};

const apiGetRateOnDate = date =>
  axios
    .get("https://api.privatbank.ua/p24api/exchange_rates?json&date=" + date)
    .then(res => res.data);

const getPBRates = (request, response) => {
  const period = getDatesRange();
  let gotResults = [];
  console.log(period);

  Promise.all(period.map(i => gotResults.push(apiGetRateOnDate(i)))).then(() =>
    console.log(gotResults)
  );
};

// response.set("Content-Type", "application/json"),
//   response.send(resp.data)

module.exports = getPBRates;
