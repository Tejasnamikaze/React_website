import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://youtu.be/I2UBjN5ER4s'></video>
      <h1>What's on your mind?</h1>
      <p>Pizza? Pasta? Burger?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ORDER NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ADVERTISEMENT<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;