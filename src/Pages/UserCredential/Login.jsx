import React, { useEffect, useState } from 'react'
// import { loginAPI } from '../../API/auth';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"

export default function Login() {
  const [input, setInput] = useState({});
  const [error, setError] = useState("");
  const [bg , setBg] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }

  useEffect(() => {
    setBg("https://source.unsplash.com/random?wallpapers")
  }, [])
  

  // const onSubmit = async () => {
  //   const response = await loginAPI(dispatch, navigate, input);
  //   console.log(response);
  //   if (response === 401)
  //     setError("Not Matched")
  // }
  return (
    <div>
      <div className='d-flex justify-center' style={{backgroundSize: "cover",backgroundPosition: "center", backgroundImage: `url(${bg})` , alignItems: "center", height: "100vh" }}>
        <div>
          <input min="10" max="10" className='d-block mt-10' type="number" placeholder='Phone Number' name="phone" onChange={(e) => inputChange(e)} style={{ width: "300px", height: "30px", padding: "3px" }} />
          <input className='mt-10 d-block' type="password" placeholder='Password' name="password" onChange={(e) => inputChange(e)} style={{ width: "300px", height: "30px", padding: "3px" }} />
          <div className='d-flex justify-center'>
            <button className='mt-10 d-block'>Sign In</button>
          </div>
          <p className='text-center color-red' style={{ fontSize: "13px", height: "5px" }}>{error}</p>
        </div>
      </div>
    </div>
  )
}
