import React from 'react';
import "./navbar.css"
import logo from "../../Asserts/SVGs/NxtWave TM_Coloured logo 1.svg";
import profile from "../../Asserts/SVGs/S.svg";

export default function Navbar() {
    return (
        <div>
            <div className='d-flex justify-between nav-outer'>
                <div className='d-flex align-item-center'>
                    <img className='nav-logo-img' src={logo} alt="" />
                </div>
                <div className='d-flex button-image'>
                    <div className='d-flex align-item-center'>
                        <button className='mr-10'>ADD ITEM</button>
                    </div>
                    <div className='d-flex align-item-center'>
                        <img src={profile} className='ml-10' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
