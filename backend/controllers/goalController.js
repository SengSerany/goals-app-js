const asyncHandler = require('express-async-handler')
// @desc     Get goals
// @route    GET /api/goals
// @access   Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Goals'});
});

// @desc     Create goal
// @route    POST /api/goals
// @access   Private
const createGoal = asyncHandler(async (req, res) => {
    // Testing error handler with Postman adding in the body a key value named "text" with a random value
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')

    }

    res.status(200).json({message: 'Create / Set Goal'});
});

// @desc     update goals
// @route    PATCH /api/goals/:id
// @access   Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`});
});

// @desc     Delete goals
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`});
});

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}