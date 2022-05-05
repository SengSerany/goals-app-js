// @desc     Get goals
// @route    GET /api/goals
// @access   Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'});
};

// @desc     Create goal
// @route    POST /api/goals
// @access   Private
const createGoal = (req, res) => {
    console.log(req.body)
    res.status(200).json({message: 'Create / Set Goal'});
};

// @desc     update goals
// @route    PATCH /api/goals/:id
// @access   Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`});
};

// @desc     Delete goals
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`});
};

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}