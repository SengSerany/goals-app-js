const express = require ('express');
const router = express.Router();
const { 
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController.js')

router.route('/').get(getGoals).post(createGoal)
router.route('/:id').patch(updateGoal).delete(deleteGoal)

module.exports = router