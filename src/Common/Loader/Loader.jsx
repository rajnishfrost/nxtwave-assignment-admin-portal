import React from 'react';
import Lottie from "lottie-react";
import laodingHand from "./splashAnimation.json";

export default function Loader() {
    return (
        <div className='h-100vh d-flex justify-center'>
            <Lottie style={{width : "300px"}} animationData={laodingHand} />
        </div>
    )
}
