const express = require('express');
const router = express.Router();

const {
    getAllExercises,
    createExercise,
    getExercise,
    deleteExercise,
    updateExercise
} = require('../controllers/exercises')

router.route('/').get(getAllExercises).post(createExercise)

module.exports = router