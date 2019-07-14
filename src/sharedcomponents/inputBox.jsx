import React from 'react';
const inputBox = ({name,placeHolder,changeHandler})=>{
    return (
        <input 
        style={{height:'30px',fontSize:'20px',width:"300px",outline:'0px',margin:"20px"}}
        type="text" name={name}
        onChange={changeHandler}
        placeholder={placeHolder}
        />
    )
}

export default inputBox;