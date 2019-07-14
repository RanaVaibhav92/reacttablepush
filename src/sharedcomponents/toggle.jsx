import React from 'react';


const toggleButton = ({ isActive, clickHandler }) => {
    console.log("Loading Time : "+new Date().getTime());
    // console.log("Is acitve : "+JSON.stringify(isActive));
    return (
       
        <div style={{ display: "inline" }}>
            <div disabled onClick={clickHandler} style={{
                width: "50px", height: "18px",
                 border: '1.5px solid #c6c6c6',
                borderRadius: '9px', margin: '30px',float:"left",
                backgroundColor: !isActive ? '#ededed' : '#ffffff'
                , boxShadow: '0px 0px 2px #c6c6c6', position: 'relative'
            }}>
                <div style={{
                    height: "15px", width: '15px', borderRadius: '50%',
                    backgroundColor: isActive ? "green" : '#c6c6c6', border: '0.8px solid #ededed', position: 'absolute',
                    transition: 'left 0.5s', left: !isActive ? "0px" : "32px",

                }}></div>
            </div></div>)

}

export default toggleButton;