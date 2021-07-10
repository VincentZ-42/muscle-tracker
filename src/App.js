import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import About from './components/About';
import Workouts from './components/Workouts';
import Body from './components/Body';
import AddWorkout from './components/AddWorkout'
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  const [showAdd, setShowAdd] = useState(false);

  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const getWorkouts = async () => {
      const WorkoutsFromServer = await fetchWorkouts();
      setWorkouts(WorkoutsFromServer);
    }
    getWorkouts()
  }, [])

  // Fetch Data (All Workouts) from Backend server
  const fetchWorkouts = async () => {
    const res = await fetch('http://localhost:5000/workouts')
    const data = await res.json();

    return (data);
  }

  // Fetch Data (One Workout) from Backend server
  const fetchWorkout = async (id) => {
    const res = await fetch(`http://localhost:5000/workouts/${id}`)
    const data = await res.json();

    return (data);
  }

  // Add Workout
  const AddTask = async (workout) => {
    const res = await fetch('http://localhost:5000/workouts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      // stringify changes JS object to json string
      body: JSON.stringify(workout)
    });

    const data = await res.json()
    setWorkouts([...workouts, data]);

    // Manuelly creates an ID for each new Task
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newWorkout = { id, ...workout };
    // setWorkouts([...workouts, newWorkout]);
  }

  // Delete Workout
  // Users should be able to delete their own workouts
  // But not workouts pre-listed on the database
  const deleteWorkout = async (id) => {
    await fetch(`http://localhost:5000/workouts/${id}`, {
      method: 'DELETE',
    })

    setWorkouts(workouts.filter((workout) => workout.id !== id))
  }

  // Update Workout Task
  const editWorkout = async (id) => {
    const workoutTask = await fetchWorkout(id);
    console.log(workoutTask);
  }

  // // Toggle Reminder - This function can be
  // // used to edit the specific workout, like name, sets,...
  // const toggleReminder = async (id) => {
  //   const taskToToggle = await fetchWorkout(id);
  //   const updWorkout = {...taskToToggle, 
  //     reminder: !taskToToggle.reminder };

  //   const res = await fetch(`http://localhost:5000/workouts/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updWorkout)
  //   });

  //   const data = await res.json()


  //   setWorkouts(
  //     workouts.map((workout) => 
  //       workout.id === id ? 
  //         {...workout, reminder: data.reminder } : 
  //         workout
  //     )
  //   )
  // };

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path ='/' 
          exact render={(props) => (
            <>
            <Body />       
            <SubHeader
              onAdd={() => setShowAdd(!showAdd)} 
              show={showAdd}
            />
            {showAdd && <AddWorkout onAdd={AddTask}/>}
            {workouts.length > 0 ? (
              <Workouts 
                workouts={workouts}
                onEdit={editWorkout}
                onDelete={deleteWorkout}
              /> 
            ) : (
              'No Workouts'
            )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
