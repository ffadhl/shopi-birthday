import { useState, useEffect } from 'react'
import Card from './Card'
import '../styles/MainContent.css'

// Generate confetti properties
const generateConfetti = () => {
  const colors = ['#ff69b4', '#ffc0cb', '#ff1493', '#ffb6c1', '#db7093']
  return [...Array(50)].map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)]
  }))
}

const confettiData = generateConfetti()

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    // Use setTimeout to avoid cascading renders
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="main">
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

      <div className={`content ${isVisible ? 'fade-in' : ''}`}>
        
        {/* Banner Image */}
        <div className="banner-section">
          <img 
            src="/img/banner.png" 
            alt="Birthday Banner" 
            className="banner-img"
          />
        </div>

        {/* Header Section */}
        <div className="header-section">
          <h1 className="title">Happy Birthday</h1>
          <h2 className="name">Shupiyyah</h2>
          <p className="age">24</p>
        </div>

        {/* Button Section */}
        <div className="button-section">
          <button className="letter-btn" onClick={() => setShowCard(true)}>
            💌 Surat dari aku
          </button>
        </div>

        {/* Cake Section */}
        <div className="cake-section">
          <img 
            src="/img/cake.gif" 
            alt="Birthday Cake" 
            className="cake-img"
          />
        </div>

        {/* Footer */}
        <div className="footer-section">
          <p className="wishes">May all your dreams come true ✨</p>
        </div>

      </div>

      {/* Card Modal */}
      {showCard && <Card onClose={() => setShowCard(false)} />}
    </div>
  )
}

export default MainContent
