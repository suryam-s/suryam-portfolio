import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { AiOutlineProject } from 'react-icons/ai';
import { IoIosContacts } from 'react-icons/io';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home'); // Use meaningful values

  return (
    <nav>
      <button onClick={() => setActiveNav('Home')} className={activeNav === 'Home' ? 'active' : ''}>
        <AiOutlineHome />
      </button>
      <button onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}>
        <AiOutlineUser />
      </button>
      <button onClick={() => setActiveNav('skills')} className={activeNav === 'skills' ? 'active' : ''}>
        <RiServiceLine />
      </button>
      <button onClick={() => setActiveNav('project')} className={activeNav === 'project' ? 'active' : ''}>
        <AiOutlineProject />
      </button>
      <button onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}>
        <IoIosContacts />
      </button>
    </nav>
  );
};

export default Nav;
