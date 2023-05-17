import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')

    const handleSubmit = async (e) => {
        e.preventdefault()

        const workout = {title, load, reps}

        // fetch request to post new data
        const response = fetch('/api/workouts', {
            method: 'POST',

        })
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>

            <label>Exercise title:</label>
            <input
                type="text"
                onChange={(e) =>setTitle(e.target.value)}
                value={title}
            />
            
            <label>Load (in kg):</label>
            <input
                type="text"
                onChange={(e) =>setLoad(e.target.value)}
                value={load}
            />
              
            <label>Reps:</label>
            <input
                type="text"
                onChange={(e) =>setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
        </form>
     );
}
 
export default WorkoutForm;