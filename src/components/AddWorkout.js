import { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';

const AddWorkout = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [muscles, setMuscles] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('');
  const [distance, setDistance] = useState('');
  const [distanceUnit, setDistanceUnit] = useState('');
  const [duration, setDuration] = useState('');
  const [durationUnit, setDurationUnit] = useState('');
  const [comments, setComments] = useState('');

  const MUSCLE_OPTIONS = [
    "heart",
    "biceps",
    "triceps",
    "forearms",
    "anterior delts",
    "lateral delts",
    "posterior delts",
    "erector spinae",
    "infraspinatus",
    "lats",
    "teres",
    "trapezius",
    "pecs",
    "abdominals",
    "obliques",
    "serratus anterior",
    "calves",
    "hamstrings",
    "quads",
    "sartorius",
    "tibialis anterior",
    "hip adductors",
    "hip flexors",
    "tensor fasciae latae",
    "gluteus maximus",
    "gluteus medius"
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return ;
    }

    onAdd(
      { text, 
        muscles,  
        sets, 
        reps,
        weight,
        weightUnit,
        distance,
        distanceUnit,
        duration,
        durationUnit,
        comments
       }
    );

    setText('');
    setMuscles([]);
    setSets('');
    setReps('');
    setWeight('');
    setWeightUnit();
    setDistance('');
    setDistanceUnit();
    setDuration('');
    setDurationUnit();
    setComments('');
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Workout</label>
        <input 
          type='text'
          placeholder='Add Workout' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='in-line'>
        <label>Sets</label>
        <input
          type='number'
          min='0'
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        ></input>
      </div>
      <div className='in-line'>
        <label>Reps</label>
        <input
          type='number'
          min='0'
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        ></input>
      </div>
      <div className='in-line'>
        <label>Weight</label>
        <input
          type='number'
          min='0'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <select name='weightUnit'>
          <option value='lbs'>lbs</option>
          <option value='kg'>kg</option>
        </select>
      </div>
      <div className='in-line'>
        <label>Distance</label>
        <input
          type='number'
          min='0'
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        ></input>
        <select name='distanceUnit'>
          <option value='miles'>miles</option>
          <option value='km'>km</option>
        </select>
      </div>
      <div className='in-line'>
        <label>Duration</label>
        <input
          type='number'
          min='0'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        ></input>
        <select name='durationUnit'>
          <option value='mins'>min</option>
          <option value='hrs'>hr</option>
        </select>
      </div>
      <div className='multiselect'>
        <Multiselect
          isObject={false}
          showCheckbox={true}
          closeOnSelect={false}
          placeholder='Select Target Muscles'
          options={MUSCLE_OPTIONS.sort()}
          selectedValues={muscles}
          onSelect={(selectedItem) => setMuscles([...muscles, selectedItem])}
          onChange={(e) => setMuscles([...muscles, e.target.value])}
        />
      </div>
      <div className='form-control'>
        <label>Additional Info</label>
        <input 
          type='text' 
          placeholder='Comments'
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>

      <input className='btn btn-block' type='submit' value='Save Workout' />
    </form>
  )
}

export default AddWorkout
