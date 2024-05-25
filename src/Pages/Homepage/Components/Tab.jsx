import React, { useState } from 'react';
import "./tab.css";

export default function Tab() {
    const [tab , setTab] = useState("resource");
console.log(tab);
    const handleTab = (e) => {
        setTab(e);
    }

  return (
    <div className='d-flex justify-center tab-outer'>
        <div className={`div-outer ${tab === "resource" ? "blue-tab" : "grey-tab"}`} onClick={(e) => handleTab("resource")}>
            <p>Resource</p>
        </div>
        <div className={`div-outer ${tab === "request" ? "blue-tab" : "grey-tab"}`} onClick={(e) => handleTab("request")}>
            <p>Request</p>
        </div>
        <div className={`div-outer ${tab === "user" ? "blue-tab" : "grey-tab"}`} onClick={(e) => handleTab("user")}>
            <p>User</p>
        </div>
    </div>
  )
}
