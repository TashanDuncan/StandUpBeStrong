const Exercise = require('../models/exercise');
const asyncWrapper = require('../middleware/async');

const getAllExercises = asyncWrapper(async (req, res) => {
  const exercises = await Exercise.find({});
  res.status(200).json({ exercises });
});

const createExercise = asyncWrapper(async (req, res) => {
  const exercise = await Exercise.create(req.body);
  res.status(201).json(exercise);
});

const getExercise = asyncWrapper(async (req, res, next) => {
  const { name: exerciseName } = req.params;
  const exercise = await Exercise.findOne({ name: exerciseName });
  if (!exercise) {
    return res
      .status(404)
      .send(`No Exercise on Database called ${exerciseName}`);
  }
  res.status(200).json({ exercise });
});

const deleteExercise = asyncWrapper(async (req, res) => {
  const { name: exerciseName } = req.params;
  const exercise = await Exercise.findOneAndDelete({ name: exerciseName });
  if (!exercise) {
    return res
      .status(404)
      .send(`No Exercise on Database called ${exerciseName}`);
  }
  res.status(200).json({ exercise });
});

const updateExercise = asyncWrapper(async (req, res) => {
  const { name: exerciseName } = req.params;
  const exercise = await Exercise.findOneAndUpdate({ name: exerciseName }, req.body, {
    new:true,
    runValidators: true,
  });
  if (!exercise) {
    return res
      .status(404)
      .send(`No Exercise on Database called ${exerciseName}`);
  }
  res.status(200).json({ exercise });
});

module.exports = {
  getAllExercises,
  createExercise,
  getExercise,
  deleteExercise,
  updateExercise,
};
