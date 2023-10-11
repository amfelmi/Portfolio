import './index.scss';
import React, { useState, useEffect } from 'react';

const GlyphAnimation = ({ letterClass, strArray, idx, delay }) => {
  const glyphs = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'シ', 'サ', 'シ', 'ス', 'ソ','マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ', 'ー',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
  ];

  const [auth, setAuth] = useState(new Array(strArray.length).fill(false));
  const [currentLetters, setCurrentLetters] = useState(strArray.map(() => ''));
  const [currentGlyphs, setCurrentGlyphs] = useState(new Array(strArray.length).fill(glyphs[0]));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [globalCurrentIndex, setGlobalCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % glyphs.length);
      setCurrentGlyphs((prevGlyphs) => {
        const updatedGlyphs = [...prevGlyphs];
        updatedGlyphs[globalCurrentIndex] = glyphs[currentIndex];
        return updatedGlyphs;
      });

      if (currentIndex === glyphs.length - 1) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [glyphs, currentIndex, globalCurrentIndex]);


  useEffect(() => {
    if (currentIndex === glyphs.length - 1) {
      console.log('Condition met!');
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setAuth((prevAuth) => {
        const updatedAuth = [...prevAuth];
        updatedAuth[globalCurrentIndex] = true;
        return updatedAuth;
      });
      setGlobalCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, glyphs.length, globalCurrentIndex, setCurrentIndex, setAuth, setGlobalCurrentIndex]);

  

  return (
    <span>
      <span>
        {auth.map((isAuthenticated, i) => (
          isAuthenticated ? (
            <span key={i} className={`${letterClass} _${i + idx}`}>
              {strArray[i]}
            </span>
          ) : (
            <span className='glyph-text' key={i}>
              {currentGlyphs[i]}
            </span>
          )
        ))}
      </span>
    </span>
  );
}

export default GlyphAnimation;
