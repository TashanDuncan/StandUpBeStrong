const express = require('express');
const router = express.Router();

const {
    getAllExercises,
    createExercise,
    getExercise,
    updateExercise,
    deleteExercise,
} = require('../controllers/exercises')

router.route('/').get(getAllExercises).post(createExercise)
router.route('/:name').get(getExercise).patch(updateExercise).delete(deleteExercise)

module.exports = router