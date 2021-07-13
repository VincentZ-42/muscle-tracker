import { FaTimes } from 'react-icons/fa'
// import { FaRegEdit } from 'react-icons/fa'

const Workout = ({ workout, onDelete, onEdit }) => {
  return (
    <>
      <div className={`workout`}>
        <h3>
          {workout.text}
          {/* <FaRegEdit style={{
            color: 'blue',
            cursor: 'pointer' }}
            onClick={() => onEdit(workout.id)}  
          /> */}
          <FaTimes style={{
            color:'red',
            cursor: 'pointer' }}
            onClick={() => onDelete(workout.id)}
          />
        </h3>
        <p>{workout.sets ? 'Sets = ' + workout.sets : '' }</p>
        <p>{workout.reps ? 'Reps = ' + workout.reps : '' }</p>
        <p>{workout.weight ? 'Weight = ' + workout.weight : '' }</p>
        <p>{workout.distance ? 'Distance = ' + workout.distance : '' }</p>
        <p>{workout.duration ? 'Duration = ' + workout.duration : '' }</p>
        <p>[ {workout.weightUnit}, {workout.distanceUnit}, {workout.durationUnit} ]</p>
        <p>{'Muscles = ' + workout.muscles.join(' | ')}</p>
        <p>{workout.comments ? 'Comments = ' + workout.comments : '' }</p>
      </div>
    </>
  )
}

export default Workout
