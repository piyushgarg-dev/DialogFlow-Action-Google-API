const express = require("express");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');
const full = require("./fulfillment");

const expressApp = express().use(bodyParser.json());

expressApp.post("/full", full);

expressApp.listen(process.env.PORT,()=>console.log('PORT',process.env.PORT));
