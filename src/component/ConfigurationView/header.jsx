import React from 'react';
import InputBox from '../../sharedcomponents/inputBox';
import ToggleButton from "../../sharedcomponents/toggle";
class HearderComponent extends React.PureComponent {
    render() {
        console.log("Header is loading : "+new Date());

        return (
            <div style={{display:"inline"}}>
                <InputBox
                    placeHolder={"Enter Name"}
                    changeHandler={this.props.handleChange}
                    name={"Name"}
                    
                />
                <ToggleButton 
                isActive={this.props.isActive}
                clickHandler={this.props.clickHandler}  />
            </div>
        )
    }
}

export default HearderComponent;