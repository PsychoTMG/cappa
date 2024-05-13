import React from 'react';

import style from './App.module.scss'

import Main from './main/Main';
import Fairy from './fairy/Fairy';
import Trip from './trip/Trip';
import Hotel from './hotel/Hotel';
import Price from './price/Price';
import Footer from './footer/Footer';
import Up from './up/Up';

function App() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div><Main /></div>
        <div ><Fairy /></div>
        <div id='trip'><Trip /></div>
        <div id='hotel'><Hotel /></div>
        <div id='price'><Price /></div>
        <div><Footer /></div>
        <div><Up /></div>
      </div>
    </div>
  );
}

export default App;
