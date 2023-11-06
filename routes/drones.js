const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const response = await Drone.find();
    console.log(response);
    res.render("drones/list.hbs", {
      allDrones: response,
    });
  } catch (err) {
    next(err);
  }
  // ... your code here
});

// GET "/drones/create"
router.get("/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
  // ... your code here
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await Drone.create({
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
  // ... your code here
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
