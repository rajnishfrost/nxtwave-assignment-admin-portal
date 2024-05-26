import React from 'react';
import "./navbar.css"
import logo from "../../Asserts/SVGs/NxtWave TM_Coloured logo 1.svg";
import profile from "../../Asserts/SVGs/S.svg";
import { useDispatch } from 'react-redux';
import { logout } from "../../Redux/authSlice"
import { Link } from 'react-router-dom';

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <div>
            <div className='d-flex justify-between nav-outer'>
                <div className='d-flex align-item-center'>
                    <img className='nav-logo-img' src={logo} alt="" />
                </div>
                <div className='d-flex button-image'>
                    <div className='d-flex align-item-center'>
                        <button className='mr-10'><Link style={{color : "white" , textDecoration : "none"}} to={"add-item"}>ADD ITEM</Link></button>
                    </div>
                    <div className='d-flex align-item-center' onClick={() => dispatch(logout())}>
                        <div className='hover-div'>
                            <img src={profile} className='ml-10' alt="" />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
