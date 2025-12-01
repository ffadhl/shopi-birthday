import { useState, useRef } from 'react'
import Loader from './components/Loader'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)
  const audioRef = useRef(null)

  const handleStart = () => {
    setStarted(true)
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e))
    }
  }

  return (
    <div className="app">
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {!started ? (
        <Loader onStart={handleStart} />
      ) : (
        <MainContent />
      )}
    </div>
  )
}

export default App
