import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "./login.css";
import { login } from "../../Redux/authSlice"
import axios from 'axios';

export default function Login() {
  const [input, setInput] = useState({});
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [image, setImage] = useState("")

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })
  }

  useEffect(() => {
    async function getImage() {
      const data = await axios.get("https://atomic-swap-backend-blockchain.onrender.com/api/v1/user/image-upload-link");
      setImage(data?.data);
    }
    getImage();
    // eslint-disable-next-line
  }, [])


  return (
    <div>
      <div className='d-flex justify-center' style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${image})`, alignItems: "center", height: "100vh" }}>
        <div>
          <input min="10" max="10" className='d-block mt-10' type="number" placeholder='Phone Number' name="phone" onChange={(e) => inputChange(e)} style={{ width: "300px", height: "30px", padding: "3px" }} />
          <input className='mt-10 d-block' type="password" placeholder='Password' name="password" onChange={(e) => inputChange(e)} style={{ width: "300px", height: "30px", padding: "3px" }} />
          <div style={{ height: "40px" }} className='d-flex justify-center'>
            {
              input?.phone?.length >= 4 && input?.password?.length >= 4
                ?
                <button onClick={() => dispatch(login())} className='mt-10 d-block'>Sign In</button>
                :
                <></>
            }
          </div>
          <p className='text-center color-red' style={{ fontSize: "13px", height: "5px" }}>{error}</p>
        </div>
      </div>
    </div>
  )
}
