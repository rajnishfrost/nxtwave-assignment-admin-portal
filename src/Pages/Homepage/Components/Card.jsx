import React from 'react';
import "./card.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Card() {
  const resource = useSelector((state) => state.resources.resourcesData);
  console.log(resource);
  return (
    <div className='d-flex flex-wrap justify-between'>
      {
        resource?.map((resource, index) => {
          return (
            <div className='card-div' key={index}>
              <div className='d-flex'>
                <div className='img-div'>
                  <img src={resource?.icon_url} alt="" />
                </div>
                <div className='ml-10'>
                  <h6>{resource?.title}</h6>
                  <p>{resource?.category}</p>
                </div>
              </div>
              <Link to={resource?.link}>{resource?.link}</Link>
              <h5>{resource?.description}</h5>
            </div>
          )
        })
      }
    </div>
  )
}
