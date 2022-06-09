import React from 'react';
import Different from '../components/Different';
import MainSplash from '../components/MainSplash';
import MarketInfo from '../components/MarketInfo';
import NavBar from '../components/NavBar';
import NoRisk from '../components/NoRisk';
import PaintSplash from '../components/PaintSplash';

export default function Home() {
  return (
    <div className='home'>
      <NavBar />
      <MainSplash />
      <PaintSplash />
      <MarketInfo />
      <NoRisk />
      <Different />
    </div>
  );
}
