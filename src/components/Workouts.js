import Workout from './Workout';

const Workouts = ({ workouts, onDelete, onToggle }) => {
  return (
    <>
      {workouts.map((workout) => (
        <Workout 
          key={workout.id} 
          workout={workout} 
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Workouts
