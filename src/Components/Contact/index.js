import './index.scss';
import React, { useState, useEffect } from 'react';
import GlyphAnimation from '../GlyphAnimation';
import DecodeAnimation from '../DecodeAnimation';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-decoder')
  const nameArray = ['A', 'B', 'D', 'U', 'L', 'M', 'A', 'J', 'I', 'D', ' ', 'E', 'L', 'M', 'I'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-Glpyh-hover')
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='test'>
     <h1 className='fade'>
          <DecodeAnimation letterClass={letterClass}
            strArray={nameArray}
          />
          <br/>
          {/* <DecodeAnimation letterClass={letterClass}
            strArray={surnameArray}
            idx={11}
          /> */}
          </h1>
    </div>
  );
};

export default Contact;
