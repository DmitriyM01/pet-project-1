import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import { actions as timeActions } from './slices/timeSlice';


const App = () => {
  const dispatch = useDispatch();
  const [background, setBackground] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => dispatch())
    const date = new Date();

    console.log(date)
  })


  return (
    <div className="background-image" style={{backgroundImage: "url('../public/02.jpg')"}}>
      <div>
        <p>hahahaha</p>
      </div>
    </ div>
  )
}

export default App
