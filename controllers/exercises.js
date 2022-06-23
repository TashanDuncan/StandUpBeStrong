const Exercise = require('../models/exercise');
const asyncWrapper = require('../middleware/async')

const getAllExercises = asyncWrapper(async (req,res) =>{
    const exercises = await Exercise.find({})
    res.status(200).json({exercises})
})

const createExercise = asyncWrapper()

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