
const WorkoutDetails = ({workout}) => {

    // const handleDelete = async () => {
    //     const response = await fetch('/api/workouts' + workout._id, {
    //         method: 'DELETE'
    //     })
    //     const json = await response.json()
      
    // }

    return ( 
        <div className="workout-details">
            <h4> {workout.title} </h4>
            <p><strong>Load (kg): </strong> {workout.load} </p>
            <p><strong>Reps: </strong> {workout.reps} </p>
            <p> {workout.createdAt} </p>
            {/* <span onClick={handleDelete}>delete</span> */}
        </div>
     );
}
 
export default WorkoutDetails;