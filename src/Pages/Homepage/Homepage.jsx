import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import Tab from './Components/Tab';
import "./homepage.css"
import Card from './Components/Card';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className='light-grey-bg'>
        <Tab />
        <div className='px1240-min-width'>
          <div className='d-flex'>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder='Search' />
          </div>
        </div>
        <div className='px1240-min-width'>
          <Card />
        </div>
      </div>
    </div>
  )
}
