import React, { useState } from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import Tab from './Components/Tab';
import "./homepage.css"
import Card from './Components/Card';

export default function Homepage() {
  const [tab , setTab] = useState("resource");
  const handleTab = (e) => {
      setTab(e);
  }
  return (
    <div>
      <Navbar />
      <div className='light-grey-bg'>
        <Tab tab={tab} handleTab={handleTab} />
        <div className='px1240-min-width'>
          <div className='d-flex'>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder='Search' />
          </div>
        </div>
        <div className='px1240-min-width'>
          <Card tab={tab}/>
        </div>
      </div>
    </div>
  )
}
