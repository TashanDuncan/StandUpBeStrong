const Exercise = require('../models/exercise');
const asyncWrapper = require('../middleware/async')

const getAllExercises = asyncWrapper(async (req,res) =>{
    const exercises = await Exercise.find({})
    res.status(200).json({exercises})
})

const createExercise = asyncWrapper(async (req,res) => {
    const exercise = await Exercise.create(req.body);
    res.status(201).json(exercise)
})

const getExercise = asyncWrapper()

const deleteExercise = asyncWrapper()

const updateExercise = asyncWrapper()


module.exports = {
    getAllExercises,
    createExercise,
    getExercise,
    deleteExercise,
    updateExercise
}