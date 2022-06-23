const mongoose = require('mongoose');
const MuscleSchema = new mongoose.Schema({ name: String });

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  instructions: {
    preparation: String,
    execution: String,
  },
  muscles: {
    target: Array,
    synergists: Array,
    dynamicStabilizers: Array,
    stabilizer: Array,
    antagonistStabilizers: Array
  },
  video: String,
  image: String,
  Classification: {
    utility: String,
    mechanics: String,
    force: String,
  },
});

module.exports = mongoose.model('Exercise', ExerciseSchema)