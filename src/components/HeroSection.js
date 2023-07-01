import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://youtu.be/I2UBjN5ER4s'></video>
      <h1>OUR VOLUNTEERS</h1>
      <p>MEET WITH THEM</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONNECT
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          VIDEO LINK<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;