import React from 'react';
import HearderComponent from './header';
import ReactTableComponent from './reacttable';

class ConfigurationComponent extends React.PureComponent{
    render(){
        return(
            <div>
                <HearderComponent 
                clickHandler={this.props.clickHandler}
                handleChange={this.props.handleChange}
                isActive={this.props.isActive}
                />
                <ReactTableComponent
                tableData = {this.props.tableData}
                columns = {this.props.columns}
                size={this.props.size}
                />
            </div>
        )
    }
}

export default ConfigurationComponent;