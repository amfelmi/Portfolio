import './index.scss';
import React from 'react';
import DecodeAnimation from '../DecodeAnimation'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-decoder-contact')
  const textArray = ['S', 'a', 'y', ' ', 'h', 'e', 'l', 'l', 'o'] 
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(e.name)
    console.log(refForm)

    emailjs
      .sendForm(
        'service_jah0ueu',
        'template_5ey84b6',
        refForm.current,
        '7ZrPVTY_1prFocJ6D'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


  return (
    <div id='contact'>
      <h1 className='section-title'>{'< Contact >'}</h1>
      <div className='contact-container'>
        <div className='text-container'>
      <div className='text-zone'>
        <h1 className='contact-title'>
          <DecodeAnimation 
            strArray={textArray}
            delay={2000}
          />
        </h1>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='full'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='full'>
                <input type='email' name='email' placeholder='Email' required />
              </li>
              <li className='full'>
                <input type='text' name='subject' placeholder='Subject' required />
              </li>
              <li>
                <textarea placeholder='Message' name='message' required></textarea>
              </li>
              <li className='submit'>
                <input type='submit' className='flat-button' value="SEND" />
              </li>
            </ul>
          </form>

        </div>
      </div>
      </div>
      <div className='map-container'>
      <div className='info-map'>
        Abdulmajid Elmi,
        <br/>
        United Kingdom,
        <br />
        109 Warwick Road,
        <br/>
        Birmingham
        <span>amfelmi10@gmail.com</span>
      </div>
      <div className='map-wrap'>
        <MapContainer center={[52.456429, -1.864394]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[52.456429, -1.864394]}>
            <Popup>Hi there!</Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>
      </div>
      <h1 className='section-title'>{'< /Contact >'}</h1>
    </div>
  );
};

export default Contact;
