import React, { useEffect, useState } from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import "./additem.css";
import group3 from "../../Asserts/SVGs/Group 3.svg"
import { Link } from 'react-router-dom';
import { API_POST_RESOURCES } from '../../API/resource';
import { toast } from 'react-toastify';

export default function AddItems() {
    const [input, setInput] = useState({});
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const handleButton = () => {
        const status = API_POST_RESOURCES(input);
        setInput({tittle : "" , link : "" , iconURL : "" , tag : "" , category : "" , description : ""});
        if (status)
            return toast.success('Added Successfully', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        toast.error('Something Went Wrong', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(() => {
        if (input?.tittle === undefined || input?.tittle?.length === 0)
            setError(true)
        else if (input?.link === undefined || input?.link?.length === 0)
            setError(true)
        else if (input?.iconURL === undefined || input?.iconURL?.length === 0)
            setError(true)
        else if (input?.tag === undefined || input?.tag?.length === 0)
            setError(true)
        else if (input?.category === undefined || input?.category?.length === 0)
            setError(true)
        else if (input?.description === undefined || input?.description?.length === 0)
            setError(true)
        else
            setError(false);
    }, [input])

    return (
        <div>
            <Navbar />
            <div className='light-grey-bg2 d-flex'>
                <div className='d-flex mt-10'>
                    <i className="fa fa-angle-left ml-10 mr-10" aria-hidden="true"></i><span><Link style={{ color: "black", textDecoration: "none" }} to={'/'}>Back</Link></span>
                </div>
                <div className='left-box d-flex justify-center align-item-center'>
                    <div className='form'>
                        <h4 className='text-center'>item Details</h4>
                        <p>ITEM TITTLE</p>
                        <input name='tittle' value={input?.tittle} onChange={(e) => handleInputChange(e)} placeholder='Enter Tittle...' type="text" maxLength={15} />
                        <p>LINK</p>
                        <input name='link' value={input?.link} onChange={(e) => handleInputChange(e)} placeholder='Enter Link...' type="text" />
                        <p>ICON URL</p>
                        <input name='iconURL' value={input?.iconURL} onChange={(e) => handleInputChange(e)} placeholder='Enter Icon URL...' type="text" />
                        <p>TAG NAME</p>
                        <select name="tag" value={input?.tag} onChange={(e) => handleInputChange(e)} id="">
                            <option value="">Select</option>
                            <option value="user">User</option>
                            <option value="request">Request</option>
                        </select>
                        <p>CATEGORY</p>
                        <input name='category' value={input?.category} onChange={(e) => handleInputChange(e)} placeholder='Enter Category...' type="text" maxLength={15} />
                        <p>DESCRIPTION</p>
                        <textarea value={input?.description} name='description' onChange={(e) => handleInputChange(e)} placeholder='Enter Description...' className='des-input' type="text" maxLength={200} />
                        <button className={`${error ? "grey-bg" : ""}`} onClick={error ? () => { } : () => handleButton()}>CREATE</button>
                        {/* {error ? <p className='color-red text-center'>You Left Field</p> : <></>} */}
                    </div>
                </div>
                <div className='right-box'>
                    <img src={group3} alt="group 3" />
                </div>
            </div>
        </div>
    )
}
