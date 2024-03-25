import React, { useState } from 'react';

function Digi() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateClock = () => {
        setTime(new Date().toLocaleTimeString());
    }

    // Set up interval to update the clock every second
    setInterval(updateClock, 1000);
        // return () => clearInterval(intervalId);
    

    const divStyle = {
        height: "auto",
        width: "40%",
        paddingLeft: "10%",
        marginLeft: "25%", // Adjusted for centering
        marginTop: "15%",
        fontSize: "100px",
        backgroundColor: "gray",
    };

    const mediaQueryStyle = {
        width: "100%", 
        marginLeft: "0%", 
        fontSize: "30px",
        paddingLeft:"35vw" // Adjusted for responsiveness
    };
    
    const mediaQueryStyle1 = {
        width: "100%", 
        marginLeft: "35vw", 
        fontSize: "30px", // Adjusted for responsiveness
    };
const heading={
    fontSize: "30px",
    marginLeft: "45vw",
}
    return (
        <>
        <div style={{ ...heading, ...(window.innerWidth <= 800 && mediaQueryStyle1) }}>Digital clock</div>
            <div id="dc" className="dc1" style={{ ...divStyle, ...(window.innerWidth <= 800 && mediaQueryStyle) }}>
                {time}
            </div>
        </>
    );
}

export default Digi;
