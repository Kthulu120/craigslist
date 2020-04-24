import React from 'react';
import locationIcon from './icons/mdi_location_searching.svg'
import plus from './icons/mdi_add_circle.png'
import searchIcon from './icons/search.svg'
import './App.css';
import { Card } from './components/Card';

import housingIcon from './icons/housing.svg'
import helpIcon from './icons/help.svg'
import businessIcon from './icons/business.svg'
import messagesIcon from './icons/messages.svg'
import personalIcon from './icons/personal.svg'
import servicesIcon from './icons/services.svg'
import shoppingIcon from './icons/shopping.svg'

function App() {
  return (
    <div className="flex-column d-flex">
      <div style={{padding: '0 32px'}} className="d-flex flex-justify-between">
        <h3 style={{color: '#3C42D3'}}>Craigslist</h3>
        <div className="d-flex flex-self-center flex-items-center">
          <img src={plus} height={32} width={32} alt="add user" />
          <span style={{color: '#3C42D3', fontSize: 20}}>Login</span>
        </div>
      </div>
      <div className="searchbar d-flex flex-self-center py-4">
        <input className="d-flex flex-1 no-border" placeholder={'Search in Oklahoma City'}></input>
        <img className="px-1" height={32} width={32} src={locationIcon} />
        <img className="px-1" height={32} width={32} src={searchIcon} />
      </div>

      <div className="d-flex flex-items-center flex-self-center flex-justify-between py-4" style={{width: '40%'}}>
        <Card icon={housingIcon} text={'Housing'} />
        <Card icon={businessIcon} text={'Business'} />
        <Card icon={shoppingIcon} text={'Shopping'} />
        <Card icon={personalIcon} text={'Personal'} />
      </div>
      <div className="d-flex flex-items-center flex-self-center flex-justify-between py-4"  style={{width: '40%'}}>
        <Card icon={messagesIcon} text={'Forums'} />
        <Card icon={servicesIcon} text={'Services'} />
        <Card icon={helpIcon} text={'Help'} />
      </div>

      <div className="px-4 flex-justify-end  flex-items-end " style={{color: '#3C42D3', textAlignLast: 'end'}} >
      <p>Terms | Privacy | Jobs | Safety</p>
      </div>
    </div>
  );
}

export default App;
