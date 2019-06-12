const axios = require("axios");
const rax = require("retry-axios");

const interceptorId = rax.attach(); //429 error

const pbRatesBaseUrl =
  "https://api.privatbank.ua/p24api/exchange_rates?json&date=";

const getFormatedDate = (offSet = 0) => {
  const date = new Date(Date.now() - offSet * 24 * 3600 * 1000);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};

const getDatesRange = (daysBeforeToday = 7) => {
  let requiredDatesRange = [];
  for (i = 0; i < daysBeforeToday; i++) {
    requiredDatesRange.push(getFormatedDate(i));
  }
  return requiredDatesRange;
};

const apiGetRate = async period => {
  const promises = period.map(async day => {
    let res = await axios.get(pbRatesBaseUrl + day);
    return res.data;
  });

  const results = await Promise.all(promises);
  return results;
};

const getPBRates = (request, response) => {
  const period = getDatesRange();

  apiGetRate(period).then(
    res => (
      response.set("Content-Type", "application/json"), response.send(res)
    )
  );
};

module.exports = getPBRates;
