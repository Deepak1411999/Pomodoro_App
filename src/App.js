
import './App.css';
import { useRef, useState } from 'react';

function padTime(time) {
  return time.toString().padStart(2, '0')
}

function App() {
  //state Variable
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [title, setTitle] = useState('POMODORO TIMER');
  const intervalRef = useRef(null);

  // functions
  function startTimer() {
    setTitle('Timer is Running')
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeleft) => {
        if (timeleft > 0) return timeleft - 1;

        resetTimer()

        return 0
      })

    }, 1000)
  }

  function pauseTimer() {
    setTitle('Timer is Pause ')
    setIsRunning(false)
    clearInterval(intervalRef.current)
  }

  function resetTimer() {
    setTitle('Timer is Reset')
    setIsRunning(false)
    clearInterval(intervalRef.current)
    setTimeLeft(25 * 60)
  }

  //computing
  const minutes = padTime(Math.floor(timeLeft / 60))

  const seconds = padTime(timeLeft - minutes * 60)

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={pauseTimer}>Pause</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>

    </div>
  );
}

export default App;
