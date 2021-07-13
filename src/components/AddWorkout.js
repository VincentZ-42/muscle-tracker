import { useState, useEffect } from 'react'
import Multiselect from 'multiselect-react-dropdown';

const AddWorkout = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [muscles, setMuscles] = useState([]);
  const [sets, setSets] = useState('5');
  const [reps, setReps] = useState('5');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [distance, setDistance] = useState('');
  const [distanceUnit, setDistanceUnit] = useState('miles');
  const [duration, setDuration] = useState('');
  const [durationUnit, setDurationUnit] = useState('min');
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

  // This console logs your muscles array anytime
  // it is changed
  useEffect(() => {
    console.log(muscles);
  }, [muscles]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return ;
    }
    if (!muscles.length) {
      alert('Please add target muscles');
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
    setSets('5');
    setReps('5');
    setWeight('');
    setWeightUnit('lbs');
    setDistance('');
    setDistanceUnit('miles');
    setDuration('');
    setDurationUnit('min');
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
        <select name='weightUnit'
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}>
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
        <select name='distanceUnit'
          value={distanceUnit}
          onChange={(e) => setDistanceUnit(e.target.value)}>
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
        <select name='durationUnit'
          value={durationUnit}
          onChange={(e) => setDurationUnit(e.target.value)}>
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
          onSelect={(selectedItems) => setMuscles(selectedItems)}
          onRemove={(selectedItems) => setMuscles(selectedItems)}
          onChange={(e) => setMuscles(e.target.value)}
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
