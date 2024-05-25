import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import Tab from './Components/Tab';
import "./homepage.css"

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className='light-grey-bg'>
        <Tab />
        <div className='search-box-outer'>
          <div className='d-flex'>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder='Search'/>
          </div>
        </div>
      </div>
    </div>
  )
}
