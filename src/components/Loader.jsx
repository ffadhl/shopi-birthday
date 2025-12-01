import '../styles/Loader.css'

// Generate confetti properties outside component to avoid re-renders
const generateConfetti = () => {
  const colors = ['#ff69b4', '#ffc0cb', '#ff1493', '#ffb6c1', '#db7093']
  return [...Array(50)].map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)]
  }))
}

const confettiData = generateConfetti()

const Loader = ({ onStart }) => {
  return (
    <div className="loader">
      {/* Confetti Animation */}
      <div className="confetti-container">
        {confettiData.map((item, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
              color: item.color
            }}
          >
            <svg viewBox="0 0 32 29.6" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="currentColor"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="loader-content">
        <div className="loader-text">
          <h1 className="loader-greeting">Happy Birthday</h1>
          <p className="loader-name">Sayangku, Cintaku!</p>
          <p className="loader-age">24</p>
        </div>
        <button className="enter-btn" onClick={onStart}>
          Enter
        </button>
      </div>
    </div>
  )
}

export default Loader
