import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { actions as timeActions } from '../slices/timeSlice.js';
import getCity from '../utilites/getCity.js';

import Weather from './Weather.jsx';
import Data from './Date.jsx';
import Tasks from './Tasks.jsx';

const App = () => {
  const [ modalState, setModalState ] = useState('closed')
  const [ newTask, setNewTask ] = useState('');
  const [ background, setBackground ] = useState(null);

  const dispatch = useDispatch();
  const { hours } = useSelector((state) => state.timeReducer);

  // Здесь у нас определение города по  широте и долготе и таймер с текущим временем
  useEffect(() => {
    getCity.then((data) => window.localStorage.setItem('city', data))

    const date = new Date();
    dispatch(timeActions.setCurrentTime(date));
    const timer = setInterval(() => {
      const date = new Date();
      dispatch(timeActions.setCurrentTime(date))
    }, 1000)
    return () => clearInterval(timer);
  }, [])

  // Здесь логика смены заднего фона в зависимости от текущего времени
  useEffect(() => {
    if(hours >= 0 && hours < 6) {
      setBackground('01')
    } else if(hours >= 6 && hours < 12) {
      setBackground('02')
    } else if(hours >= 12 && hours < 18) {
      setBackground('03')
    } else {
      setBackground('04')
    }
  })

  return (
    <div className="background-image" style={{backgroundImage: `url('../public/${background}.jpg')`}}>
      <Weather></Weather>
      <Data></Data>
      <Tasks 
        setNewTask={setNewTask}
        newTask={newTask}
        setModalState={setModalState} 
        modalState={modalState}
      ></Tasks>
    </div>
  )
}

export default App
