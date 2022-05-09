import { useState } from "react";

function GoalForm() {


    const [ formData, setFormData ] = useState({
        text: ""
    });

    const { text } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <section className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name="text" id="text" value={text} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type="button">Add your new goal</button>
            </div>
        </form>
    </section>
  )
};

export default GoalForm