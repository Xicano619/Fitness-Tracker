const db = require("../models");
const router = require("express").Router();

// Get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: req.body,
      },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400);
    });
});

// Create new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400);
    });
});
module.exports = router;
