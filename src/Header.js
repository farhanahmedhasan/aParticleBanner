import React from 'react';
import './header.css';
import avatar from './assests/img/user-4.jpg';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Particles from 'react-particles-js';
import particleConfig from './config/particle-config';

const Header = () => {
  return (
    <header className='header'>
      <div className='avatar'>
        <img src={avatar} alt='A person' className='avatar__img' />
      </div>

      <Particles params={particleConfig} className='header__particle' />

      <div className='header__info'>
        <h3 className='header__title'>Nicolis Columbus</h3>
        <div className='line'></div>
        <h4 className='header__subtitle'>Data scientist</h4>
      </div>

      <div className='iconBox'>
        <AiFillGithub className='iconBox__icon' />
        <AiFillLinkedin className='iconBox__icon' />
        <AiOutlineMail className='iconBox__icon' />
      </div>

      <div className='header__arrowDown'>
        <IoIosArrowDown className='arrowDown' />
      </div>
    </header>
  );
};

export default Header;
