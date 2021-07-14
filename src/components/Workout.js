import { FaTimes } from 'react-icons/fa'
// import { FaRegEdit } from 'react-icons/fa'

// Shows Weight, Distance, or Duration of Workout 
// displayed next to Workout name
const showInfo = (workout) => {
  let output = '';

  if (Number(workout.weight) > 0) {
    output += ` - ${workout.weight} ${workout.weightUnit}`;
  }
  if (Number(workout.distance) > 0) {
    output += ` - ${workout.distance} ${workout.distanceUnit}`
  }
  if (Number(workout.duration) > 0) {
    output += ` - ${workout.duration} ${workout.durationUnit}`
  }

  return output;
};

// Creates a single button
const makeButton = (workout) => {
  return (
    <button conClick={() => console.log('I have been clicked')}>
      {workout.reps}
    </button>
  );
};

// Creates an array of buttons
// that match the number of sets/reps in the workout
const createButtons = (workout) => {
  const sets = Number(workout.sets);
  let btnGroup = [];
  for (let i = 0; i < sets; i++) {
    btnGroup.push(makeButton(workout));
  }
  return btnGroup;
}

const Workout = ({ workout, onDelete, onEdit }) => {
  return (
    <>
      <div className={`workout`}>
        <h3>
          {workout.text}{showInfo(workout)}
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
        <div className='button-holder' id='setBtns'>
          {createButtons(workout)}
        </div>
        <p>{workout.comments ? 'Comments = ' + workout.comments : '' }</p>
      </div>
    </>
  )
}

export default Workout
