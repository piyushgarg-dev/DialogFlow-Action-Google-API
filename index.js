const expess = require("express");
const bodyParser = require("body-parser");

const full = require("./fulfillment");

const expressApp = express().use(bodyParser.json());

expressApp.post("/full", full);

expressApp.listen(process.env.PORT,()=>console.log('PORT',process.env.PORT));
