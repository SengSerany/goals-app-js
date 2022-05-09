import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from '../features/goals/goalSlice';

function GoalForm() {

    const dispatch = useDispatch();

    const [ goalString, setGoalString ] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createGoal(goalString));
        setGoalString('');
    };

  return (
    <section className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input 
                    type="text"
                    name="text"
                    id="text"
                    value={goalString}
                    onChange={(e) => setGoalString(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="submit">Add your new goal</button>
            </div>
        </form>
    </section>
  )
};

export default GoalForm