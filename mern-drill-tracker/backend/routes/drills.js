const router = require('express').Router();
let Drill = require('../models/drill.model');

router.route('/').get((req,res) => {
  Drill.find()
  .then(drills => res.json(drills))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const repetition = Number(req.body.repetition);
  const date = Date.parse(req.body.date);

  const newDrill = new Drill({
    username,
    description,
    duration,
    repetition,
    date
  });

  newDrill.save()
  .then(() => res.json('Drill added!'))
  .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;