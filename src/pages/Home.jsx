import React, { useState, useEffect } from 'react';
import '../styles/Home.scss'
import icon from '../assets/icon-dice.svg'
import dividerDesktop from '../assets/pattern-divider-desktop.svg'
import dividerMobile from '../assets/pattern-divider-mobile.svg'
import axios from 'axios'

const API = 'https://api.adviceslip.com/advice';

const Home = () => {
	const [ advice, setAdvice ] = useState({})

	useEffect(async() => {
    handleClick();
	}, [])

  const handleClick = async () => {
    const response = await axios(API);
		setAdvice(response.data.slip);
  }

  return (
    <>
      <div className='container'>
        <div className='container-text'>
          <p className='title-style'>Advice #{ advice.id }</p>
          <p className='message-style'>{ advice.advice }</p>
          <img src={dividerDesktop} className='divider-desktop' />
          <img src={dividerMobile} className='divider-mobile' />
          <div className='button' onClick={handleClick}>
            <img src={icon} className="image-button" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;