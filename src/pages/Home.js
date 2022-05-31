import React from 'react';
import ContactBar from '../components/ContactBar';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className='home'>
      <ContactBar />
      <NavBar />
    </div>
  );
}
