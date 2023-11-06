const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

const droneRouter = require("./drones.js");
router.use("/drones", droneRouter);

module.exports = router;
