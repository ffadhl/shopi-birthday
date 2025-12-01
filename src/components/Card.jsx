import { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import '../styles/Card.css';

const Card = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lottieContainer = useRef(null);

  useEffect(() => {
    if (!isOpen && lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/Love letter.json'
      });

      return () => animation.destroy();
    }
  }, [isOpen]);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  return (
    <div className="card-overlay" onClick={onClose}>
      <div className="card-container" onClick={(e) => e.stopPropagation()}>
        
        {!isOpen ? (
          <div className="envelope-wrapper">
            <div 
              ref={lottieContainer} 
              className="lottie-envelope" 
              onClick={handleOpenEnvelope}
            />
            <p className="envelope-hint">✨ Klik untuk membuka surat ✨</p>
          </div>
        ) : (
          <div className="simple-letter">
            <button className="close-btn" onClick={onClose}>×</button>
            
            <h2 style={{color: '#c9648f', marginBottom: '20px', textAlign: 'center'}}>Hai sayang! Dadakan nih</h2>
            
            <div style={{color: '#333', fontSize: '16px', lineHeight: '1.8'}}>
              <p style={{marginBottom: '15px', color: '#c9648f', fontWeight: 'bold'}}>Hi cintaku, Happy Birthday ya.</p>
              
              <p style={{marginBottom: '15px'}}>
                Do'a yang terbaik selalu aku ucapkan untuk kamu. semoga di umur kamu yang bertambah ini, kamu mendapatkan apa yang kamu mau. InsyaAllah will be ur year, InsyaAllah kamu mendapatkan segala sesuatu yang kamu mau.
              </p>
              
              <p style={{marginBottom: '15px'}}>
                Semoga kamu di berikan kesehatan, kekuatan, di beri keberkahan Barakallahu fi umrik sayang
              </p>
              
              <p style={{marginBottom: '15px'}}>
                Semoga kamu dijauhkan dari semua kesusahan, dijauhkan dari mara bahaya, dijauhkan dari orang-orang jahat, dan dijauhkan dar dari semua hal-hal buruk dan kesulitan .
              </p>
              
              <p style={{marginBottom: '15px'}}>
                kamu jangan khawatir, mau umur kamu berapapun. aku janji akan selalu melindungi kamu. seperti kata aku yg akan selalu aku pegang. I got ur back bb, always. don't worry.
              </p>
              
              <p style={{marginBottom: '15px'}}>
                Terakhir, aku minta maaf belum bisa surprise-in kamu dan beri kamu hadiah tepat waktu kaya di tahun-tahun sebelumnya. Tapi do'a aku untuk kamu selalu aku ucapkan disetiap saat
              </p>
              
              <p style={{marginTop: '30px', textAlign: 'right', color: '#c9648f', fontWeight: 'bold'}}>
                dari laki-laki kamu, with love - Fadhl Al- Hafizh❤️❤️❤️
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Card;
