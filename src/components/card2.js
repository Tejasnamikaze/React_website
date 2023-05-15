import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function card2() {
  return (
    <div>
      <div className='hero-container'>
      <video src=''></video>
      <h1>SERVICES OFFERED</h1>
      <p>ANY QUERIES PLEASE CONTACT?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>

    </div>
  )
}

export default card2
