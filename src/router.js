const express = require("express");

const getPBRates = require("./controllers/rates");
const main = require("./controllers/main/main.js");

const apiRoutes = express.Router();

apiRoutes.get("/", main).get("/rates", getPBRates);

module.exports = apiRoutes;
