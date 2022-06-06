import React from 'react';
import MainSplash from '../components/MainSplash';
import NavBar from '../components/NavBar';
import PaintSplash from '../components/PaintSplash';

export default function Home() {
  return (
    <div className='home'>
      <NavBar />
      <MainSplash />
      <PaintSplash />
    </div>
  );
}
