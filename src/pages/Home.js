import React from 'react';
import MainSplash from '../components/MainSplash';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className='home'>
      <NavBar />
      <MainSplash />
    </div>
  );
}
