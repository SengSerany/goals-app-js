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

// router.get('/', getGoals);

// router.post('/', createGoal);

// router.patch('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

module.exports = router