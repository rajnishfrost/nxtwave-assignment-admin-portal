import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='d-flex justify-center align-item-center h-100vh'>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
          alt=""
          width={500} height={250}
        />
        <p className='text-center'><Link to={"/"}>Back To home</Link></p>
      </div>
    </div>
  )
}
